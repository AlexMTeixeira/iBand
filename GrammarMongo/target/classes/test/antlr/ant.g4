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
    : PROPERTY DPTS member
    {
        $dboIn.append($PROPERTY.getText(),$member.dbo.get($member.dbo.keySet().toArray()[0]));
        $dboOut=$dboIn;
    }
    ;
member returns[BasicDBObject dbo]
    :   array   {BasicDBObject dbo = new BasicDBObject("array",$array.dbl);$dbo=dbo;}
    |   NUMBER  {BasicDBObject dbo = new BasicDBObject("int",Integer.parseInt($NUMBER.getText()));$dbo=dbo;}
    |   STRING  {BasicDBObject dbo = new BasicDBObject("string",$STRING.getText());$dbo=dbo;}
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


FK : '{';
BK : '}';
FP : '[';
BP : ']';
VIRG: ',';
DPTS: ':';
PROPERTY
    : 'data'
    | 'titulo'
    | 'texto'
    | 'autor'
    | 'pchave'
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
