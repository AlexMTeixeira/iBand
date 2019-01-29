// Generated from /home/master/IdeaProjects/GrammarMongo/src/main/antlr/ant.g4 by ANTLR 4.7

    import com.mongodb.*;

import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link antParser}.
 */
public interface antListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link antParser#json}.
	 * @param ctx the parse tree
	 */
	void enterJson(antParser.JsonContext ctx);
	/**
	 * Exit a parse tree produced by {@link antParser#json}.
	 * @param ctx the parse tree
	 */
	void exitJson(antParser.JsonContext ctx);
	/**
	 * Enter a parse tree produced by {@link antParser#obj}.
	 * @param ctx the parse tree
	 */
	void enterObj(antParser.ObjContext ctx);
	/**
	 * Exit a parse tree produced by {@link antParser#obj}.
	 * @param ctx the parse tree
	 */
	void exitObj(antParser.ObjContext ctx);
	/**
	 * Enter a parse tree produced by {@link antParser#pair}.
	 * @param ctx the parse tree
	 */
	void enterPair(antParser.PairContext ctx);
	/**
	 * Exit a parse tree produced by {@link antParser#pair}.
	 * @param ctx the parse tree
	 */
	void exitPair(antParser.PairContext ctx);
	/**
	 * Enter a parse tree produced by {@link antParser#property}.
	 * @param ctx the parse tree
	 */
	void enterProperty(antParser.PropertyContext ctx);
	/**
	 * Exit a parse tree produced by {@link antParser#property}.
	 * @param ctx the parse tree
	 */
	void exitProperty(antParser.PropertyContext ctx);
	/**
	 * Enter a parse tree produced by {@link antParser#member}.
	 * @param ctx the parse tree
	 */
	void enterMember(antParser.MemberContext ctx);
	/**
	 * Exit a parse tree produced by {@link antParser#member}.
	 * @param ctx the parse tree
	 */
	void exitMember(antParser.MemberContext ctx);
	/**
	 * Enter a parse tree produced by {@link antParser#array}.
	 * @param ctx the parse tree
	 */
	void enterArray(antParser.ArrayContext ctx);
	/**
	 * Exit a parse tree produced by {@link antParser#array}.
	 * @param ctx the parse tree
	 */
	void exitArray(antParser.ArrayContext ctx);
	/**
	 * Enter a parse tree produced by {@link antParser#arrayUnit}.
	 * @param ctx the parse tree
	 */
	void enterArrayUnit(antParser.ArrayUnitContext ctx);
	/**
	 * Exit a parse tree produced by {@link antParser#arrayUnit}.
	 * @param ctx the parse tree
	 */
	void exitArrayUnit(antParser.ArrayUnitContext ctx);
	/**
	 * Enter a parse tree produced by {@link antParser#coords}.
	 * @param ctx the parse tree
	 */
	void enterCoords(antParser.CoordsContext ctx);
	/**
	 * Exit a parse tree produced by {@link antParser#coords}.
	 * @param ctx the parse tree
	 */
	void exitCoords(antParser.CoordsContext ctx);
	/**
	 * Enter a parse tree produced by {@link antParser#coord}.
	 * @param ctx the parse tree
	 */
	void enterCoord(antParser.CoordContext ctx);
	/**
	 * Exit a parse tree produced by {@link antParser#coord}.
	 * @param ctx the parse tree
	 */
	void exitCoord(antParser.CoordContext ctx);
	/**
	 * Enter a parse tree produced by {@link antParser#date}.
	 * @param ctx the parse tree
	 */
	void enterDate(antParser.DateContext ctx);
	/**
	 * Exit a parse tree produced by {@link antParser#date}.
	 * @param ctx the parse tree
	 */
	void exitDate(antParser.DateContext ctx);
}