import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.tree.ParseTree;

import java.io.IOException;

public class Main {

    public static void main(String[] args){
        String filename= "not.txt";
        CharStream input ;
        try{
            input = CharStreams.fromFileName(filename);
            antLexer lexer = new antLexer(input);
            CommonTokenStream tokens = new CommonTokenStream(lexer);
            antParser parser = new antParser(tokens);
            ParseTree tree = parser.json();
//            ParseTreeWalker walker = new ParseTreeWalker();
//            walker.walk(new antWalker(), tree);
            System.out.println("arvore "+tree.toStringTree(parser));
        } catch(IOException e){
            System.err.println("Erro na leitura do ficheiro de log. \n");
            e.printStackTrace();
        }catch(NullPointerException e){
            e.printStackTrace();
        }
    }
}
