grammar ant;
@parser::header{
    import com.mongodb.*;
}
@parser::members{
    antHandler handler = new antHandler();

}
json
    : obj (VIRG obj)*
    ;
obj
@init{
    BasicDBObject newDbo = new BasicDBObject();
}
@after{
    handler.insertDB(newDbo);
}
    : FK p1=pair[newDbo] (VIRG p2=pair[newDbo])* BK
    | FK BK
    ;
pair [BasicDBObject dboIn] returns[BasicDBObject dboOut]
    : property DPTS member
    {
        $dboIn.append($property.textOut,$member.dbo.get($member.dbo.keySet().toArray()[0]));
        $dboOut=$dboIn;
    }
    ;
property returns[String textOut]
    : EVENT_PROPERTY {$textOut=new String($EVENT_PROPERTY.getText());}
    | NEWS_PROPERTY {$textOut=new String($NEWS_PROPERTY.getText());}
    ;
member returns[BasicDBObject dbo]
    :   array   {BasicDBObject dbo = new BasicDBObject("array",$array.dbl);$dbo=dbo;}
    |   NUMBER  {BasicDBObject dbo = new BasicDBObject("int",Integer.parseInt($NUMBER.getText()));$dbo=dbo;}
    |   STRING  {BasicDBObject dbo = new BasicDBObject("string",$STRING.getText());$dbo=dbo;}
    |   date    {BasicDBObject dbo = new BasicDBObject("date",$date.dateOut);$dbo=dbo;}
    |   coords  {$dbo= new BasicDBObject("coordenadas",$coords.dboOut);}
    ;
array returns[BasicDBList dbl]
@init{
    BasicDBList dbl = new BasicDBList();
}
    : FP v1=arrayUnit[dbl](VIRG v2=arrayUnit[dbl])* BP {$dbl=dbl;}
    | FP BP
    ;
arrayUnit [BasicDBList dblIn] returns[BasicDBList dblOut]
    : STRING {$dblIn.add($STRING.text);$dblOut=$dblIn;}
    | NUMBER {$dblIn.add(Integer.parseInt($NUMBER.text));$dblOut=$dblIn;}
    ;
coords returns[BasicDBObject dboOut]
@init{
    BasicDBObject dbo=new BasicDBObject();
}
    : FK coord[dbo] (',' coord[dbo])* BK {$dboOut=dbo;}
    ;
coord [BasicDBObject dboIn] returns[BasicDBObject dboOut]
    : COORD DPTS STRING {$dboIn.append($COORD.getText(),$STRING.getText());$dboOut=dboIn;}
    ;
date returns[String dateOut]
    : d=NUMBER FSL m=NUMBER FSL a=NUMBER VIRG h=NUMBER DPTS mm=NUMBER
    {
        $dateOut=handler.parseDate(Integer.parseInt($d.getText()),Integer.parseInt($m.getText()),Integer.parseInt($a.getText()),Integer.parseInt($h.getText()),Integer.parseInt($mm.getText()));
    };
FK : '{';
BK : '}';
FP : '[';
BP : ']';
VIRG: ',';
DPTS: ':';
FSL: '/';
EVENT_PROPERTY
    : 'local'
    | 'tema'
    | 'descricao'
    | 'horario'
    | 'interesse'
    | 'coordenadas'
    ;
NEWS_PROPERTY
    : 'data'
    | 'titulo'
    | 'texto'
    | 'autor'
    | 'pchave'
    ;
COORD
    : 'latitude'
    | 'longitude'
    ;
STRING
    : '"' (ESC | SAFECODEPOINT)* '"'
    ;
fragment ESC
    : '\\' (["\\/bfnrt] | UNICODE)
    ;
fragment UNICODE
    : 'u' HEX HEX HEX HEX
    ;
fragment HEX
    : [0-9a-fA-F]
    ;
fragment SAFECODEPOINT
    : ~ ["\\\u0000-\u001F]
    ;
NUMBER
    : '-'? INT ('.'[0-9]+)?
    ;
fragment INT
    : '0' | [1-9][0-9]*
    ;
WS
    : [ \t\r\n]+ -> skip
    ;
