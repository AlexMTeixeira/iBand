// Generated from /home/master/IdeaProjects/GrammarMongo/src/test/antlr/ant.g4 by ANTLR 4.7
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
		FK=1, BK=2, FP=3, BP=4, VIRG=5, DPTS=6, PROPERTY=7, STRING=8, NUMBER=9, 
		WS=10;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"FK", "BK", "FP", "BP", "VIRG", "DPTS", "PROPERTY", "STRING", "ESC", "UNICODE", 
		"HEX", "SAFECODEPOINT", "NUMBER", "INT", "WS"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\f\177\b\1\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\3\2\3\2\3\3\3\3\3"+
		"\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\bH"+
		"\n\b\3\t\3\t\3\t\7\tM\n\t\f\t\16\tP\13\t\3\t\3\t\3\n\3\n\3\n\5\nW\n\n"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\r\3\r\3\16\5\16d\n\16\3\16\3"+
		"\16\3\16\6\16i\n\16\r\16\16\16j\5\16m\n\16\3\17\3\17\3\17\7\17r\n\17\f"+
		"\17\16\17u\13\17\5\17w\n\17\3\20\6\20z\n\20\r\20\16\20{\3\20\3\20\2\2"+
		"\21\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\2\25\2\27\2\31\2\33\13\35\2"+
		"\37\f\3\2\b\n\2$$\61\61^^ddhhppttvv\5\2\62;CHch\5\2\2!$$^^\3\2\62;\3\2"+
		"\63;\5\2\13\f\17\17\"\"\2\u0086\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2"+
		"\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\33\3\2"+
		"\2\2\2\37\3\2\2\2\3!\3\2\2\2\5#\3\2\2\2\7%\3\2\2\2\t\'\3\2\2\2\13)\3\2"+
		"\2\2\r+\3\2\2\2\17G\3\2\2\2\21I\3\2\2\2\23S\3\2\2\2\25X\3\2\2\2\27^\3"+
		"\2\2\2\31`\3\2\2\2\33c\3\2\2\2\35v\3\2\2\2\37y\3\2\2\2!\"\7}\2\2\"\4\3"+
		"\2\2\2#$\7\177\2\2$\6\3\2\2\2%&\7]\2\2&\b\3\2\2\2\'(\7_\2\2(\n\3\2\2\2"+
		")*\7.\2\2*\f\3\2\2\2+,\7<\2\2,\16\3\2\2\2-.\7f\2\2./\7c\2\2/\60\7v\2\2"+
		"\60H\7c\2\2\61\62\7v\2\2\62\63\7k\2\2\63\64\7v\2\2\64\65\7w\2\2\65\66"+
		"\7n\2\2\66H\7q\2\2\678\7v\2\289\7g\2\29:\7z\2\2:;\7v\2\2;H\7q\2\2<=\7"+
		"c\2\2=>\7w\2\2>?\7v\2\2?@\7q\2\2@H\7t\2\2AB\7r\2\2BC\7e\2\2CD\7j\2\2D"+
		"E\7c\2\2EF\7x\2\2FH\7g\2\2G-\3\2\2\2G\61\3\2\2\2G\67\3\2\2\2G<\3\2\2\2"+
		"GA\3\2\2\2H\20\3\2\2\2IN\7$\2\2JM\5\23\n\2KM\5\31\r\2LJ\3\2\2\2LK\3\2"+
		"\2\2MP\3\2\2\2NL\3\2\2\2NO\3\2\2\2OQ\3\2\2\2PN\3\2\2\2QR\7$\2\2R\22\3"+
		"\2\2\2SV\7^\2\2TW\t\2\2\2UW\5\25\13\2VT\3\2\2\2VU\3\2\2\2W\24\3\2\2\2"+
		"XY\7w\2\2YZ\5\27\f\2Z[\5\27\f\2[\\\5\27\f\2\\]\5\27\f\2]\26\3\2\2\2^_"+
		"\t\3\2\2_\30\3\2\2\2`a\n\4\2\2a\32\3\2\2\2bd\7/\2\2cb\3\2\2\2cd\3\2\2"+
		"\2de\3\2\2\2el\5\35\17\2fh\7\60\2\2gi\t\5\2\2hg\3\2\2\2ij\3\2\2\2jh\3"+
		"\2\2\2jk\3\2\2\2km\3\2\2\2lf\3\2\2\2lm\3\2\2\2m\34\3\2\2\2nw\7\62\2\2"+
		"os\t\6\2\2pr\t\5\2\2qp\3\2\2\2ru\3\2\2\2sq\3\2\2\2st\3\2\2\2tw\3\2\2\2"+
		"us\3\2\2\2vn\3\2\2\2vo\3\2\2\2w\36\3\2\2\2xz\t\7\2\2yx\3\2\2\2z{\3\2\2"+
		"\2{y\3\2\2\2{|\3\2\2\2|}\3\2\2\2}~\b\20\2\2~ \3\2\2\2\r\2GLNVcjlsv{\3"+
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