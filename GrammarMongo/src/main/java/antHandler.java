import com.mongodb.*;
import java.time.DateTimeException;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class antHandler {
    private MongoClient mongoClient;
    private DB database;
    private DBCollection noticiasCollect;
    private Map<String,String> messages;
    private boolean dbg = false;
    public antHandler(){
        try{
            setupMessages();
            config();
        } catch(IllegalStateException e){
            e.printStackTrace();
        }
    }
    private void setupMessages(){
        messages=new HashMap<>();
        messages.put("menuInit","0 - Listagem das bases de dados existentes em localhost:27017\n1 - Ligar a DB Mongo\nQ - Sair da aplicacao");
        messages.put("escolhaNaoSuportada","Escolha nao suportada!");
        messages.put("adeus", "Adeus!");
        messages.put("NaoExisteAliasBD","Nao existe base de dados com esse alias.");
        messages.put("LeituraNomeDB","Erro na leitura do input (nome da DB).");
        messages.put("NaoExisteAliasColecao", "Nao existe Colecao com esse alias.");
        messages.put("LeituraNomeColecao","Erro na leitura do input (nome da colecao).");
        messages.put("ConexaoMongo","Erro na conexao ao Mongo. Verifique a sua base de dados");
    }
    public void emptyClientDB(){
        database.dropDatabase();
    }
    public void showDB(){
        DBCursor dbcursor = noticiasCollect.find();
        List<DBObject> objs = dbcursor.toArray();
        for(DBObject dbo:objs)
            System.out.println(dbo.toString());
    }
    public void insertDB(BasicDBObject dbo){
        noticiasCollect.insert(dbo);
    }

    public void config() throws IllegalStateException{
        Scanner input = new Scanner(System.in);
        String var="";
        mongoClient = new MongoClient(new MongoClientURI("mongodb://localhost:27017"));
        do{
            System.out.println(messages.get("menuInit"));
            var=input.nextLine();
            if ("0".equals(var)) {
                listClientDbs();
            } else if ("1".equals(var)) {
                setMongoDB();
            } else if ("Q".equals(var)) {
                System.out.println(messages.get("adeus"));
                System.exit(0);
            } else {
                System.out.println(messages.get("escolhaNaoSuportada"));
            }
        }while(var.equals("0"));
    }
    private void setMongoDB() {
        Scanner input = new Scanner(System.in);
        String var="";
        try{
            System.out.println("Nome da DB Mongo: ");
            var=input.nextLine();
            database = mongoClient.getDB(var);
        }catch(IllegalArgumentException e){
            System.err.println(messages.get("NaoExisteAliasBD"));
            if(dbg) e.printStackTrace();
        }catch(IllegalStateException e){
            System.err.println(messages.get("LeituraNomeDB"));
            if(dbg) e.printStackTrace();
        }
        try{
            System.out.println("Nome da Colecao: ");
            var=input.nextLine();
            noticiasCollect = database.getCollection(var);
        }catch(IllegalArgumentException e){
            System.err.println(messages.get("NaoExisteAliasColecao"));
            e.printStackTrace();
        }catch(IllegalStateException e){
            System.err.println("LeituraNomeColecao");
            e.printStackTrace();
        }
    }
    private void listClientDbs(){
        System.out.println("Lista de DBs");
        mongoClient.listDatabaseNames().forEach(new Block<String>() {
            public void apply(String s) {
                System.out.println(s);
            }
        });
    }
    public String parseDate(int d,int m, int a, int h, int mm){
        String res;
        try{
            res= LocalDateTime.of(a,m,d,h,mm).toString();
        }catch(DateTimeException e){
            System.out.printf("Erro na leitura da data: %d/%d/%d %d:%d",d,m,a,h,mm);
            if(dbg) e.printStackTrace();
            String mockDate="01-01-2001 00:00";
            return mockDate;
        }
        return res;
    }
}
