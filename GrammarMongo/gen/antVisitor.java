// Generated from /home/master/IdeaProjects/GrammarMongo/src/test/antlr/ant.g4 by ANTLR 4.7

    import com.mongodb.*;

import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link antParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface antVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link antParser#json}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJson(antParser.JsonContext ctx);
	/**
	 * Visit a parse tree produced by {@link antParser#obj}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitObj(antParser.ObjContext ctx);
	/**
	 * Visit a parse tree produced by {@link antParser#pair}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPair(antParser.PairContext ctx);
	/**
	 * Visit a parse tree produced by {@link antParser#member}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMember(antParser.MemberContext ctx);
	/**
	 * Visit a parse tree produced by {@link antParser#array}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArray(antParser.ArrayContext ctx);
	/**
	 * Visit a parse tree produced by {@link antParser#arrayUnit}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArrayUnit(antParser.ArrayUnitContext ctx);
}