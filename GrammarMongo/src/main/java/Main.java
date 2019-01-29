import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.tree.ParseTree;

import java.io.IOException;
import java.nio.file.NoSuchFileException;
import java.util.Scanner;

public class Main {
    private static String setFilename(){
        Scanner input = new Scanner(System.in);
        String var="";
        boolean rdy=false;
        do {
            try {
                System.out.println("Nome do ficheiro: /json/");
                var = input.nextLine();
                rdy=true;
            } catch (IllegalStateException e) {
                System.err.println("Erro na leitura do input (nome da DB).");
                e.printStackTrace();
            }
        } while(!rdy);
        return "json/".concat(var);
    }
    private static void welcomeBoard(){
        System.out.println("________________\nJSON 2 MONGO APP\nDados a fornecer:" +
                "\n1 - Nome do Ficheiro .json para carregar a BD" +
                "\n2 - Nome da BD Mongo(Se nao existir, e' criada)" +
                "\n3 - Nome da colecao\n");
    }
    public static void main(String[] args){
        welcomeBoard();
        String filename= "";
        CharStream input ;
        try{
            filename=setFilename();
            input = CharStreams.fromFileName(filename);
            antLexer lexer = new antLexer(input);
            CommonTokenStream tokens = new CommonTokenStream(lexer);
            antParser parser = new antParser(tokens);
            ParseTree tree = parser.json();
            System.out.println("Carregamento concluido com sucesso!");
            System.out.println("Arvore de Derivacao\n "+tree.toStringTree(parser));
        } catch(IOException e){
            System.err.println("Erro na leitura do ficheiro de log. "+filename);
            e.printStackTrace();
        }catch(NullPointerException e){
            e.printStackTrace();
        }

    }
}
