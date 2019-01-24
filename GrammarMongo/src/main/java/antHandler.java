import com.mongodb.*;
import com.mongodb.client.MongoIterable;

import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.List;
import java.util.Scanner;

public class antHandler {
    public MongoClient mongoClient;
    public HashMap<String, DBObject> objects;
    public DB database;
    public DBCollection noticiasCollect;
    public antHandler(){
        try{
            config();
        } catch(IllegalStateException e){
            e.printStackTrace();
        }
//        DBObject novo = new BasicDBObject()
//                .append("id",2)
//                .append("titulo", "segundo teste");
//        noticiasCollect.insert(novo);
        objects = new HashMap<String, DBObject>();
        System.out.println(" hi mom! ");
    }
    public void emptyClientDB(){
        database.dropDatabase();
    }
    public void showDB(){
        DBCursor dbcursor = noticiasCollect.find();
        List<DBObject> objs = dbcursor.toArray();
        for(DBObject dbo:objs)
            System.out.println(" elem: "+dbo.toString());
    }
    public void insertDB(BasicDBObject dbo){
        noticiasCollect.insert(dbo);
        System.out.println("done!");
    }

    public void config() throws IllegalStateException{
        Scanner input = new Scanner(System.in);
        String var="";
        mongoClient = new MongoClient(new MongoClientURI("mongodb://localhost:27017"));
        do{
            System.out.println("0 - Listagem das bases de dados existentes em localhost:27017\n1 - Ligar a DB Mongo");
            var=input.nextLine();
            if ("0".equals(var)) {
                listClientDbs();
            } else if ("1".equals(var)) {
                setMongoDB();

            } else if ("Q".equals(var)) {
                System.exit(0);
            } else {
                System.out.println("Escolha nao suportada!");
            }
        }while(!var.equals("1"));
    }
    private void setMongoDB() {
        Scanner input = new Scanner(System.in);
        String var="";
        try{
            System.out.println("Nome da DB Mongo: ");
            var=input.nextLine();
            database = mongoClient.getDB(var);
        }catch(IllegalArgumentException e){
            System.err.println("Nao existe base de dados com esse alias.");
            e.printStackTrace();
        }catch(IllegalStateException e){
            System.err.println("Erro na leitura do input (nome da DB).");
            e.printStackTrace();
        }
        try{
            System.out.println("Nome da Colecao: ");
            var=input.nextLine();
            noticiasCollect = database.getCollection(var);
        }catch(IllegalArgumentException e){
            System.err.println("Nao existe Colecao com esse alias.");
            e.printStackTrace();
        }catch(IllegalStateException e){
            System.err.println("Erro na leitura do input (nome da colecao).");
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
}
