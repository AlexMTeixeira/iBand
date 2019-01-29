// Generated from /home/master/IdeaProjects/GrammarMongo/src/main/antlr/ant.g4 by ANTLR 4.7
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class antLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		FK=1, BK=2, FP=3, BP=4, VIRG=5, DPTS=6, FSL=7, EVENT_PROPERTY=8, NEWS_PROPERTY=9, 
		COORD=10, STRING=11, NUMBER=12, WS=13;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"FK", "BK", "FP", "BP", "VIRG", "DPTS", "FSL", "EVENT_PROPERTY", "NEWS_PROPERTY", 
		"COORD", "STRING", "ESC", "UNICODE", "HEX", "SAFECODEPOINT", "NUMBER", 
		"INT", "WS"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'{'", "'}'", "'['", "']'", "','", "':'", "'/'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "FK", "BK", "FP", "BP", "VIRG", "DPTS", "FSL", "EVENT_PROPERTY", 
		"NEWS_PROPERTY", "COORD", "STRING", "NUMBER", "WS"
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


	public antLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "ant.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\17\u00c9\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3"+
		"\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\5\tc\n\t\3\n\3\n\3\n\3\n\3"+
		"\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n"+
		"\3\n\3\n\3\n\3\n\5\n\177\n\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3"+
		"\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\5\13\u0092\n\13\3\f\3\f\3"+
		"\f\7\f\u0097\n\f\f\f\16\f\u009a\13\f\3\f\3\f\3\r\3\r\3\r\5\r\u00a1\n\r"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\20\3\20\3\21\5\21\u00ae\n\21"+
		"\3\21\3\21\3\21\6\21\u00b3\n\21\r\21\16\21\u00b4\5\21\u00b7\n\21\3\22"+
		"\3\22\3\22\7\22\u00bc\n\22\f\22\16\22\u00bf\13\22\5\22\u00c1\n\22\3\23"+
		"\6\23\u00c4\n\23\r\23\16\23\u00c5\3\23\3\23\2\2\24\3\3\5\4\7\5\t\6\13"+
		"\7\r\b\17\t\21\n\23\13\25\f\27\r\31\2\33\2\35\2\37\2!\16#\2%\17\3\2\b"+
		"\n\2$$\61\61^^ddhhppttvv\5\2\62;CHch\5\2\2!$$^^\3\2\62;\3\2\63;\5\2\13"+
		"\f\17\17\"\"\2\u00d6\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2"+
		"\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3"+
		"\2\2\2\2\27\3\2\2\2\2!\3\2\2\2\2%\3\2\2\2\3\'\3\2\2\2\5)\3\2\2\2\7+\3"+
		"\2\2\2\t-\3\2\2\2\13/\3\2\2\2\r\61\3\2\2\2\17\63\3\2\2\2\21b\3\2\2\2\23"+
		"~\3\2\2\2\25\u0091\3\2\2\2\27\u0093\3\2\2\2\31\u009d\3\2\2\2\33\u00a2"+
		"\3\2\2\2\35\u00a8\3\2\2\2\37\u00aa\3\2\2\2!\u00ad\3\2\2\2#\u00c0\3\2\2"+
		"\2%\u00c3\3\2\2\2\'(\7}\2\2(\4\3\2\2\2)*\7\177\2\2*\6\3\2\2\2+,\7]\2\2"+
		",\b\3\2\2\2-.\7_\2\2.\n\3\2\2\2/\60\7.\2\2\60\f\3\2\2\2\61\62\7<\2\2\62"+
		"\16\3\2\2\2\63\64\7\61\2\2\64\20\3\2\2\2\65\66\7n\2\2\66\67\7q\2\2\67"+
		"8\7e\2\289\7c\2\29c\7n\2\2:;\7v\2\2;<\7g\2\2<=\7o\2\2=c\7c\2\2>?\7f\2"+
		"\2?@\7g\2\2@A\7u\2\2AB\7e\2\2BC\7t\2\2CD\7k\2\2DE\7e\2\2EF\7c\2\2Fc\7"+
		"q\2\2GH\7j\2\2HI\7q\2\2IJ\7t\2\2JK\7c\2\2KL\7t\2\2LM\7k\2\2Mc\7q\2\2N"+
		"O\7k\2\2OP\7p\2\2PQ\7v\2\2QR\7g\2\2RS\7t\2\2ST\7g\2\2TU\7u\2\2UV\7u\2"+
		"\2Vc\7g\2\2WX\7e\2\2XY\7q\2\2YZ\7q\2\2Z[\7t\2\2[\\\7f\2\2\\]\7g\2\2]^"+
		"\7p\2\2^_\7c\2\2_`\7f\2\2`a\7c\2\2ac\7u\2\2b\65\3\2\2\2b:\3\2\2\2b>\3"+
		"\2\2\2bG\3\2\2\2bN\3\2\2\2bW\3\2\2\2c\22\3\2\2\2de\7f\2\2ef\7c\2\2fg\7"+
		"v\2\2g\177\7c\2\2hi\7v\2\2ij\7k\2\2jk\7v\2\2kl\7w\2\2lm\7n\2\2m\177\7"+
		"q\2\2no\7v\2\2op\7g\2\2pq\7z\2\2qr\7v\2\2r\177\7q\2\2st\7c\2\2tu\7w\2"+
		"\2uv\7v\2\2vw\7q\2\2w\177\7t\2\2xy\7r\2\2yz\7e\2\2z{\7j\2\2{|\7c\2\2|"+
		"}\7x\2\2}\177\7g\2\2~d\3\2\2\2~h\3\2\2\2~n\3\2\2\2~s\3\2\2\2~x\3\2\2\2"+
		"\177\24\3\2\2\2\u0080\u0081\7n\2\2\u0081\u0082\7c\2\2\u0082\u0083\7v\2"+
		"\2\u0083\u0084\7k\2\2\u0084\u0085\7v\2\2\u0085\u0086\7w\2\2\u0086\u0087"+
		"\7f\2\2\u0087\u0092\7g\2\2\u0088\u0089\7n\2\2\u0089\u008a\7q\2\2\u008a"+
		"\u008b\7p\2\2\u008b\u008c\7i\2\2\u008c\u008d\7k\2\2\u008d\u008e\7v\2\2"+
		"\u008e\u008f\7w\2\2\u008f\u0090\7f\2\2\u0090\u0092\7g\2\2\u0091\u0080"+
		"\3\2\2\2\u0091\u0088\3\2\2\2\u0092\26\3\2\2\2\u0093\u0098\7$\2\2\u0094"+
		"\u0097\5\31\r\2\u0095\u0097\5\37\20\2\u0096\u0094\3\2\2\2\u0096\u0095"+
		"\3\2\2\2\u0097\u009a\3\2\2\2\u0098\u0096\3\2\2\2\u0098\u0099\3\2\2\2\u0099"+
		"\u009b\3\2\2\2\u009a\u0098\3\2\2\2\u009b\u009c\7$\2\2\u009c\30\3\2\2\2"+
		"\u009d\u00a0\7^\2\2\u009e\u00a1\t\2\2\2\u009f\u00a1\5\33\16\2\u00a0\u009e"+
		"\3\2\2\2\u00a0\u009f\3\2\2\2\u00a1\32\3\2\2\2\u00a2\u00a3\7w\2\2\u00a3"+
		"\u00a4\5\35\17\2\u00a4\u00a5\5\35\17\2\u00a5\u00a6\5\35\17\2\u00a6\u00a7"+
		"\5\35\17\2\u00a7\34\3\2\2\2\u00a8\u00a9\t\3\2\2\u00a9\36\3\2\2\2\u00aa"+
		"\u00ab\n\4\2\2\u00ab \3\2\2\2\u00ac\u00ae\7/\2\2\u00ad\u00ac\3\2\2\2\u00ad"+
		"\u00ae\3\2\2\2\u00ae\u00af\3\2\2\2\u00af\u00b6\5#\22\2\u00b0\u00b2\7\60"+
		"\2\2\u00b1\u00b3\t\5\2\2\u00b2\u00b1\3\2\2\2\u00b3\u00b4\3\2\2\2\u00b4"+
		"\u00b2\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5\u00b7\3\2\2\2\u00b6\u00b0\3\2"+
		"\2\2\u00b6\u00b7\3\2\2\2\u00b7\"\3\2\2\2\u00b8\u00c1\7\62\2\2\u00b9\u00bd"+
		"\t\6\2\2\u00ba\u00bc\t\5\2\2\u00bb\u00ba\3\2\2\2\u00bc\u00bf\3\2\2\2\u00bd"+
		"\u00bb\3\2\2\2\u00bd\u00be\3\2\2\2\u00be\u00c1\3\2\2\2\u00bf\u00bd\3\2"+
		"\2\2\u00c0\u00b8\3\2\2\2\u00c0\u00b9\3\2\2\2\u00c1$\3\2\2\2\u00c2\u00c4"+
		"\t\7\2\2\u00c3\u00c2\3\2\2\2\u00c4\u00c5\3\2\2\2\u00c5\u00c3\3\2\2\2\u00c5"+
		"\u00c6\3\2\2\2\u00c6\u00c7\3\2\2\2\u00c7\u00c8\b\23\2\2\u00c8&\3\2\2\2"+
		"\17\2b~\u0091\u0096\u0098\u00a0\u00ad\u00b4\u00b6\u00bd\u00c0\u00c5\3"+
		"\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}