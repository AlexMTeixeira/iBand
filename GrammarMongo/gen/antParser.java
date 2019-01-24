// Generated from /home/master/IdeaProjects/GrammarMongo/src/test/antlr/ant.g4 by ANTLR 4.7

    import com.mongodb.*;

import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class antParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		FK=1, BK=2, FP=3, BP=4, VIRG=5, DPTS=6, PROPERTY=7, STRING=8, NUMBER=9, 
		WS=10;
	public static final int
		RULE_json = 0, RULE_obj = 1, RULE_pair = 2, RULE_member = 3, RULE_array = 4, 
		RULE_arrayUnit = 5;
	public static final String[] ruleNames = {
		"json", "obj", "pair", "member", "array", "arrayUnit"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'{'", "'}'", "'['", "']'", "','", "':'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "FK", "BK", "FP", "BP", "VIRG", "DPTS", "PROPERTY", "STRING", "NUMBER", 
		"WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "ant.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }


	    antHandler handler = new antHandler();


	public antParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class JsonContext extends ParserRuleContext {
		public List<ObjContext> obj() {
			return getRuleContexts(ObjContext.class);
		}
		public ObjContext obj(int i) {
			return getRuleContext(ObjContext.class,i);
		}
		public List<TerminalNode> VIRG() { return getTokens(antParser.VIRG); }
		public TerminalNode VIRG(int i) {
			return getToken(antParser.VIRG, i);
		}
		public JsonContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_json; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof antListener ) ((antListener)listener).enterJson(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof antListener ) ((antListener)listener).exitJson(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof antVisitor ) return ((antVisitor<? extends T>)visitor).visitJson(this);
			else return visitor.visitChildren(this);
		}
	}

	public final JsonContext json() throws RecognitionException {
		JsonContext _localctx = new JsonContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_json);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(12);
			obj();
			setState(17);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==VIRG) {
				{
				{
				setState(13);
				match(VIRG);
				setState(14);
				obj();
				}
				}
				setState(19);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ObjContext extends ParserRuleContext {
		public PairContext p1;
		public PairContext p2;
		public TerminalNode FK() { return getToken(antParser.FK, 0); }
		public TerminalNode BK() { return getToken(antParser.BK, 0); }
		public List<PairContext> pair() {
			return getRuleContexts(PairContext.class);
		}
		public PairContext pair(int i) {
			return getRuleContext(PairContext.class,i);
		}
		public List<TerminalNode> VIRG() { return getTokens(antParser.VIRG); }
		public TerminalNode VIRG(int i) {
			return getToken(antParser.VIRG, i);
		}
		public ObjContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_obj; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof antListener ) ((antListener)listener).enterObj(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof antListener ) ((antListener)listener).exitObj(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof antVisitor ) return ((antVisitor<? extends T>)visitor).visitObj(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ObjContext obj() throws RecognitionException {
		ObjContext _localctx = new ObjContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_obj);

		    BasicDBObject newDbo = new BasicDBObject();

		int _la;
		try {
			setState(33);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(20);
				match(FK);
				setState(21);
				((ObjContext)_localctx).p1 = pair(newDbo);
				setState(26);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==VIRG) {
					{
					{
					setState(22);
					match(VIRG);
					setState(23);
					((ObjContext)_localctx).p2 = pair(newDbo);
					}
					}
					setState(28);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(29);
				match(BK);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(31);
				match(FK);
				setState(32);
				match(BK);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);

			    handler.insertDB(newDbo);

		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PairContext extends ParserRuleContext {
		public BasicDBObject dboIn;
		public BasicDBObject dboOut;
		public Token PROPERTY;
		public MemberContext member;
		public TerminalNode PROPERTY() { return getToken(antParser.PROPERTY, 0); }
		public TerminalNode DPTS() { return getToken(antParser.DPTS, 0); }
		public MemberContext member() {
			return getRuleContext(MemberContext.class,0);
		}
		public PairContext(ParserRuleContext parent, int invokingState) { super(parent, invokingState); }
		public PairContext(ParserRuleContext parent, int invokingState, BasicDBObject dboIn) {
			super(parent, invokingState);
			this.dboIn = dboIn;
		}
		@Override public int getRuleIndex() { return RULE_pair; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof antListener ) ((antListener)listener).enterPair(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof antListener ) ((antListener)listener).exitPair(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof antVisitor ) return ((antVisitor<? extends T>)visitor).visitPair(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PairContext pair(BasicDBObject dboIn) throws RecognitionException {
		PairContext _localctx = new PairContext(_ctx, getState(), dboIn);
		enterRule(_localctx, 4, RULE_pair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(35);
			((PairContext)_localctx).PROPERTY = match(PROPERTY);
			setState(36);
			match(DPTS);
			setState(37);
			((PairContext)_localctx).member = member();

			        _localctx.dboIn.append(((PairContext)_localctx).PROPERTY.getText(),((PairContext)_localctx).member.dbo.get(((PairContext)_localctx).member.dbo.keySet().toArray()[0]));
			        ((PairContext)_localctx).dboOut = _localctx.dboIn;
			    
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MemberContext extends ParserRuleContext {
		public BasicDBObject dbo;
		public ArrayContext array;
		public Token NUMBER;
		public Token STRING;
		public ArrayContext array() {
			return getRuleContext(ArrayContext.class,0);
		}
		public TerminalNode NUMBER() { return getToken(antParser.NUMBER, 0); }
		public TerminalNode STRING() { return getToken(antParser.STRING, 0); }
		public MemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_member; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof antListener ) ((antListener)listener).enterMember(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof antListener ) ((antListener)listener).exitMember(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof antVisitor ) return ((antVisitor<? extends T>)visitor).visitMember(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MemberContext member() throws RecognitionException {
		MemberContext _localctx = new MemberContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_member);
		try {
			setState(47);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FP:
				enterOuterAlt(_localctx, 1);
				{
				setState(40);
				((MemberContext)_localctx).array = array();
				BasicDBObject dbo = new BasicDBObject("array",((MemberContext)_localctx).array.dbl);((MemberContext)_localctx).dbo = dbo;
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 2);
				{
				setState(43);
				((MemberContext)_localctx).NUMBER = match(NUMBER);
				BasicDBObject dbo = new BasicDBObject("int",Integer.parseInt(((MemberContext)_localctx).NUMBER.getText()));((MemberContext)_localctx).dbo = dbo;
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 3);
				{
				setState(45);
				((MemberContext)_localctx).STRING = match(STRING);
				BasicDBObject dbo = new BasicDBObject("string",((MemberContext)_localctx).STRING.getText());((MemberContext)_localctx).dbo = dbo;
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayContext extends ParserRuleContext {
		public BasicDBList dbl;
		public ArrayUnitContext v1;
		public ArrayUnitContext v2;
		public TerminalNode FP() { return getToken(antParser.FP, 0); }
		public TerminalNode BP() { return getToken(antParser.BP, 0); }
		public List<ArrayUnitContext> arrayUnit() {
			return getRuleContexts(ArrayUnitContext.class);
		}
		public ArrayUnitContext arrayUnit(int i) {
			return getRuleContext(ArrayUnitContext.class,i);
		}
		public List<TerminalNode> VIRG() { return getTokens(antParser.VIRG); }
		public TerminalNode VIRG(int i) {
			return getToken(antParser.VIRG, i);
		}
		public ArrayContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_array; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof antListener ) ((antListener)listener).enterArray(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof antListener ) ((antListener)listener).exitArray(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof antVisitor ) return ((antVisitor<? extends T>)visitor).visitArray(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ArrayContext array() throws RecognitionException {
		ArrayContext _localctx = new ArrayContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_array);

		    BasicDBList dbl = new BasicDBList();

		int _la;
		try {
			setState(63);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(49);
				match(FP);
				setState(50);
				((ArrayContext)_localctx).v1 = arrayUnit(dbl);
				setState(55);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==VIRG) {
					{
					{
					setState(51);
					match(VIRG);
					setState(52);
					((ArrayContext)_localctx).v2 = arrayUnit(dbl);
					}
					}
					setState(57);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(58);
				match(BP);
				((ArrayContext)_localctx).dbl = dbl;
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(61);
				match(FP);
				setState(62);
				match(BP);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayUnitContext extends ParserRuleContext {
		public BasicDBList dblIn;
		public BasicDBList dblOut;
		public Token STRING;
		public Token NUMBER;
		public TerminalNode STRING() { return getToken(antParser.STRING, 0); }
		public TerminalNode NUMBER() { return getToken(antParser.NUMBER, 0); }
		public ArrayUnitContext(ParserRuleContext parent, int invokingState) { super(parent, invokingState); }
		public ArrayUnitContext(ParserRuleContext parent, int invokingState, BasicDBList dblIn) {
			super(parent, invokingState);
			this.dblIn = dblIn;
		}
		@Override public int getRuleIndex() { return RULE_arrayUnit; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof antListener ) ((antListener)listener).enterArrayUnit(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof antListener ) ((antListener)listener).exitArrayUnit(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof antVisitor ) return ((antVisitor<? extends T>)visitor).visitArrayUnit(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ArrayUnitContext arrayUnit(BasicDBList dblIn) throws RecognitionException {
		ArrayUnitContext _localctx = new ArrayUnitContext(_ctx, getState(), dblIn);
		enterRule(_localctx, 10, RULE_arrayUnit);
		try {
			setState(69);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING:
				enterOuterAlt(_localctx, 1);
				{
				setState(65);
				((ArrayUnitContext)_localctx).STRING = match(STRING);
				_localctx.dblIn.add((((ArrayUnitContext)_localctx).STRING!=null?((ArrayUnitContext)_localctx).STRING.getText():null));((ArrayUnitContext)_localctx).dblOut = _localctx.dblIn;
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 2);
				{
				setState(67);
				((ArrayUnitContext)_localctx).NUMBER = match(NUMBER);
				_localctx.dblIn.add(Integer.parseInt((((ArrayUnitContext)_localctx).NUMBER!=null?((ArrayUnitContext)_localctx).NUMBER.getText():null)));((ArrayUnitContext)_localctx).dblOut = _localctx.dblIn;
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\fJ\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\3\2\3\2\3\2\7\2\22\n\2\f\2\16\2\25"+
		"\13\2\3\3\3\3\3\3\3\3\7\3\33\n\3\f\3\16\3\36\13\3\3\3\3\3\3\3\3\3\5\3"+
		"$\n\3\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5\62\n\5\3\6\3"+
		"\6\3\6\3\6\7\68\n\6\f\6\16\6;\13\6\3\6\3\6\3\6\3\6\3\6\5\6B\n\6\3\7\3"+
		"\7\3\7\3\7\5\7H\n\7\3\7\2\2\b\2\4\6\b\n\f\2\2\2K\2\16\3\2\2\2\4#\3\2\2"+
		"\2\6%\3\2\2\2\b\61\3\2\2\2\nA\3\2\2\2\fG\3\2\2\2\16\23\5\4\3\2\17\20\7"+
		"\7\2\2\20\22\5\4\3\2\21\17\3\2\2\2\22\25\3\2\2\2\23\21\3\2\2\2\23\24\3"+
		"\2\2\2\24\3\3\2\2\2\25\23\3\2\2\2\26\27\7\3\2\2\27\34\5\6\4\2\30\31\7"+
		"\7\2\2\31\33\5\6\4\2\32\30\3\2\2\2\33\36\3\2\2\2\34\32\3\2\2\2\34\35\3"+
		"\2\2\2\35\37\3\2\2\2\36\34\3\2\2\2\37 \7\4\2\2 $\3\2\2\2!\"\7\3\2\2\""+
		"$\7\4\2\2#\26\3\2\2\2#!\3\2\2\2$\5\3\2\2\2%&\7\t\2\2&\'\7\b\2\2\'(\5\b"+
		"\5\2()\b\4\1\2)\7\3\2\2\2*+\5\n\6\2+,\b\5\1\2,\62\3\2\2\2-.\7\13\2\2."+
		"\62\b\5\1\2/\60\7\n\2\2\60\62\b\5\1\2\61*\3\2\2\2\61-\3\2\2\2\61/\3\2"+
		"\2\2\62\t\3\2\2\2\63\64\7\5\2\2\649\5\f\7\2\65\66\7\7\2\2\668\5\f\7\2"+
		"\67\65\3\2\2\28;\3\2\2\29\67\3\2\2\29:\3\2\2\2:<\3\2\2\2;9\3\2\2\2<=\7"+
		"\6\2\2=>\b\6\1\2>B\3\2\2\2?@\7\5\2\2@B\7\6\2\2A\63\3\2\2\2A?\3\2\2\2B"+
		"\13\3\2\2\2CD\7\n\2\2DH\b\7\1\2EF\7\13\2\2FH\b\7\1\2GC\3\2\2\2GE\3\2\2"+
		"\2H\r\3\2\2\2\t\23\34#\619AG";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}