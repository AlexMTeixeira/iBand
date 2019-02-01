var Work = require('../models/workModel')
var fs = require('fs')
var StreamZip =require('node-stream-zip')
const del = require('del')
const zip = new StreamZip({
    file:'./sheets.zip',
    storeEntries:true
  })

module.exports.list = async () => {
    return await Work
            .find()
            .exec()
}
module.exports.getByTitle = tit => {
    return Work
        .findOne({title: tit})
        .exec()
        .catch(err => console.log('gbt error: '+err))
}
module.exports.insert = work => {
    return Work.create(work)
} 
module.exports.delete = async id =>{
    await Work.remove({_id:id})
            .exec()
}
module.exports.treatZip = () =>{
    zip.close()
    zip.on('ready', () => {
    let jsonLinks = zip.entryDataSync('sheets/json/iBanda-SIP.json')
    var files = JSON.parse(jsonLinks).files
    if(files!=null)
        files.forEach((file)=>{
        const data = zip.entryDataSync(`sheets/json/${file}.json`);
        var instrData = JSON.parse(data)
        this.getByTitle(instrData.titulo)
            .then(res => {
            if(res==null){
                var obj = {
                title:instrData.titulo,
                type:instrData.tipo,
                composer:instrData.compositor,
                arrangement:instrData.arranjo,
                instruments:[]
                }
                instrData.instrumentos.forEach((instr)=>{
                var ipp =instr.partitura.path
                var pasta = ipp.split('-')[0]
                var fpath = `sheets/iBanda-PDFs/${pasta}/${ipp}`
                var ex = zip.entry(fpath) != undefined ? true : false
                var ins = {
                    name: instr.nome,
                    filename: ipp,
                    path: 'sheets/'+pasta+'/'+ipp,
                    voz:instr.partitura.voz,
                    exists: ex
                }
                obj.instruments.push(ins)
                })
                this.insert(obj)
            }
        })
            .catch(err=> console.log(err))
        })
        if(fs.existsSync('public/sheets/')){
        del.sync(['public/sheets/**'])
        console.log('deleted')
        }
        fs.mkdirSync('public/sheets/')
        zip.extract('sheets/iBanda-PDFs/', './public/sheets', err => {
        console.log(err ? err : 'Extracted');
        zip.close();
        });
    });
}
module.exports.addWorkSIP = fich =>{
    fs.readFile('./temp/json/iBanda-SIP.json','utf8',(err,data)=>{
        if(!err){     
            var sip = JSON.parse(data)
            sip.files.push(fich._id)
            fs.writeFile('./temp/json/iBanda-SIP.json', JSON.stringify(sip),'utf8',()=>{
                console.log('SIP alterado')
            })
        }
        else console.log('Erro na leitura do SIP')
        
    })
}
module.exports.toJsonFolder = fich =>{
    var objWr = fich
    console.log(objWr)
    fs.writeFile(`./temp/json/${objWr._id}.json`, objWr,'utf8',()=>{
        console.log('ficheiro adicionado com sucesso')
    })
}
module.exports.cleanUp = () => {
    if(fs.existsSync('./sheets.zip'))
        fs.unlinkSync('./sheets.zip')
    zipFolder('./temp/','./sheets.zip',(err)=>{
      if(err) console.log(err)
      del.sync(['./temp/**'])
    })
}
module.exports.removeFromSIP = fich =>{
    fs.readFile('./temp/json/iBanda-SIP.json','utf8',(err,data)=>{
        if(!err){     
            var sip = JSON.parse(data)
            sip.files.splice(sip.files.findIndex(v=>v === fich),1)
            fs.writeFile('./temp/json/iBanda-SIP.json', JSON.stringify(sip),'utf8',()=>{
                console.log('SIP alterado (DEL)')
            })
            try{
                fs.unlinkSync(`./temp/json/${fich}.json`)
                console.log(`./temp/json/${fich}.json`)
            } catch(err){
                console.log(err)
            }  
        }
        else console.log('Erro na leitura do SIP')
    })
}
