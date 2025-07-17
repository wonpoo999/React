export const extendedJavaQuizzes = [
  {
    type: "choice",
    title: "Java 기초 문법",
    question: "다음 중 자바의 기본 타입(primitive type)이 아닌 것은?",
    options: ["int", "String", "boolean", "double"],
    answer: 1,
    explanation: "String은 객체 타입이며 primitive type이 아닙니다."
  },
  {
    type: "choice",
    title: "Java 기초 문법",
    question: `다음 코드의 출력 결과로 올바른 것은?\n\nString str1 = "Hello";\nString str2 = "Hello";\nString str3 = new String("Hello");\n\nSystem.out.println(str1 == str2);\nSystem.out.println(str1 == str3);`,
    options: ["true\ntrue", "false\nfalse", "true\nfalse", "false\ntrue"],
    answer: 2,
    explanation: "str1과 str2는 동일한 문자열 리터럴을 참조하므로 true, str3은 new로 생성되어 다른 객체이므로 false"
  },
  {
    type: "choice",
    title: "Java 기초 문법",
    question: `다음 코드의 출력 결과는?\n\nPerson p1 = new Person();\nPerson p2 = new Person();\nPerson p3 = p1;\n\nSystem.out.println(p1 == p2);\nSystem.out.println(p1 == p3);`,
    options: ["true\ntrue", "false\nfalse", "true\nfalse", "false\ntrue"],
    answer: 3,
    explanation: "p1과 p2는 서로 다른 객체이므로 false, p3는 p1과 같은 참조를 가지므로 true"
  },
  {
    type: "choice",
    title: "Java 클래스 및 static",
    question: `다음 Student 클래스의 toString() 메소드를 원하는 형태로 출력되도록 구현한 것은?\n\n출력 형태: 이름: 홍길동, 나이: 20`,
    options: [
      "public String toString() { return \"name=\" + name + \" age=\" + age; }",
      "public String toString() { return \"이름: \" + name + \", 나이: \" + age; }",
      "String toString() { return \"이름: \" + name + age; }",
      "System.out.println(name + \" \" + age);"
    ],
    answer: 1,
    explanation: "toString 메소드를 재정의하여 원하는 포맷으로 출력하도록 구현합니다."
  },
  {
    type: "choice",
    title: "Java 클래스 및 static",
    question: "다음 중 static 메소드의 특징으로 올바른 것은?",
    options: [
      "객체를 생성해야만 호출할 수 있다",
      "클래스 이름으로 직접 호출할 수 있다",
      "모든 변수에 자유롭게 접근할 수 있다",
      "오버라이딩이 가능하다"
    ],
    answer: 1,
    explanation: "static 메소드는 클래스 이름으로 직접 호출할 수 있습니다."
  },
  {
    type: "choice",
    title: "Java 배열과 예외 처리",
    question: "자바에서 배열의 길이를 얻기 위한 올바른 방법은?",
    options: ["array.length()", "array.size", "array.length", "array.getLength()"],
    answer: 2,
    explanation: "자바에서 배열의 길이는 length 필드를 통해 얻습니다. 괄호는 사용하지 않습니다."
  },
  {
    type: "choice",
    title: "Java 상속과 다형성",
    question: "자바에서 클래스 상속 시 사용하는 키워드는 무엇인가요?",
    options: ["inherits", "extends", "implements", "super"],
    answer: 1,
    explanation: "자바에서 클래스 상속은 extends 키워드를 사용합니다."
  },
  {
    type: "choice",
    title: "Java 상속과 다형성",
    question: "다형성(polymorphism)을 설명하는 데 가장 적절한 것은?",
    options: [
      "여러 클래스가 하나의 메소드를 공유하는 것",
      "하나의 클래스가 여러 클래스를 상속받는 것",
      "하나의 메소드가 다양한 방식으로 동작하는 것",
      "여러 변수를 하나로 묶는 것"
    ],
    answer: 2,
    explanation: "다형성은 동일한 이름의 메소드가 다양한 클래스에서 서로 다르게 동작할 수 있도록 하는 객체 지향 개념입니다."
  },
  {
    type: "choice",
    title: "Java 상속과 다형성",
    question: "자바에서 추상 클래스와 인터페이스의 차이로 올바른 것은?",
    options: [
      "추상 클래스는 인스턴스 생성이 가능하다",
      "인터페이스는 필드를 가질 수 있다",
      "추상 클래스는 메소드 구현을 가질 수 있다",
      "인터페이스는 생성자를 가질 수 있다"
    ],
    answer: 2,
    explanation: "추상 클래스는 일부 메소드 구현이 가능하지만 인터페이스는 Java 8 이전까지는 불가능했고, 이후부터는 default 메소드로 제한적 구현이 가능합니다."
  },
  {
    type: "choice",
    title: "Java 상속과 다형성",
    question: "자바에서 오버라이딩(Overriding)과 오버로딩(Overloading)의 차이로 올바른 것은?",
    options: [
      "오버라이딩은 같은 이름의 메소드를 다른 클래스에서 재정의하는 것이고, 오버로딩은 이름이 다른 메소드를 여러 개 정의하는 것이다.",
      "오버라이딩은 접근 제한자를 변경할 수 있지만, 오버로딩은 매개변수 개수를 달리한다.",
      "오버로딩은 하나의 클래스에서 메소드 이름은 같지만 매개변수나 반환형이 다른 여러 메소드를 정의하는 것이고, 오버라이딩은 상속받은 메소드를 재정의하는 것이다.",
      "오버로딩은 상속과 관련이 없고, 오버라이딩은 관련이 없다."
    ],
    answer: 2,
    explanation: "오버로딩은 같은 이름의 메소드를 매개변수나 반환형을 다르게 하여 하나의 클래스에서 정의하는 것이고, 오버라이딩은 상속받은 메소드를 재정의하는 것입니다."
  },
  {
    type: "choice",
    title: "Java 클래스 및 static",
    question: "다음 중 접근 제어자에 대한 설명으로 올바르지 않은 것은?",
    options: [
      "public은 모든 클래스에서 접근 가능하다.",
      "private은 동일 클래스 내에서만 접근 가능하다.",
      "protected는 같은 패키지와 상속받은 클래스에서만 접근 가능하다.",
      "default는 다른 패키지의 클래스에서도 접근 가능하다."
    ],
    answer: 3,
    explanation: "default 접근 제어자는 같은 패키지 내에서만 접근이 가능하며, 다른 패키지에서는 접근할 수 없습니다."
  },
  {
    type: "choice",
    title: "Java 클래스 및 static",
    question: "자바에서 static 키워드의 역할로 올바른 것은?",
    options: [
      "인스턴스별로 값을 다르게 유지한다",
      "클래스에 속하며 모든 인스턴스가 공유한다",
      "객체 생성 시에만 접근할 수 있다",
      "지역 변수로만 사용할 수 있다"
    ],
    answer: 1,
    explanation: "static 키워드는 클래스에 속하며, 해당 필드나 메소드는 모든 인스턴스가 공유합니다."
  },
  
{
    type: "choice",
    title: "Java 배열과 예외 처리",
    question: "자바에서 배열(Array)의 인덱스는 어디서부터 시작하나요?",
    options: ["1", "0", "-1", "사용자가 정의"],
    answer: 1,
    explanation: "자바의 배열은 항상 인덱스 0부터 시작합니다."
  },
  {
    type: "choice",
    title: "Java 배열과 예외 처리",
    question: "배열의 크기를 넘어선 인덱스에 접근하면 어떤 예외가 발생하나요?",
    options: [
      "ArraySizeExceededException",
      "NullPointerException",
      "IndexOutOfBoundsException",
      "IllegalArgumentException"
    ],
    answer: 2,
    explanation: "배열의 범위를 벗어나 접근하면 IndexOutOfBoundsException이 발생합니다."
  },
  {
    type: "choice",
    title: "Java 배열과 예외 처리",
    question: "다음 중 예외(Exception)와 에러(Error)에 대한 설명으로 올바른 것은?",
    options: [
      "모든 예외는 반드시 처리해야 한다",
      "Error는 예외 처리의 일환으로 try-catch로 처리할 수 있다",
      "예외는 프로그램에서 복구 가능한 문제이고, 에러는 시스템 레벨의 심각한 문제이다",
      "예외는 발생 즉시 프로그램을 종료한다"
    ],
    answer: 2,
    explanation: "예외는 복구 가능한 문제이지만, 에러는 대부분 JVM이나 하드웨어 관련으로 복구 불가능합니다."
  },
  {
    type: "choice",
    title: "Java 배열과 예외 처리",
    question: "try-catch 문에서 finally 블록은 언제 실행되나요?",
    options: [
      "예외가 발생했을 때만",
      "예외가 발생하지 않았을 때만",
      "catch 블록이 실행되었을 때만",
      "항상 실행된다"
    ],
    answer: 3,
    explanation: "finally 블록은 예외 발생 여부와 관계없이 항상 실행됩니다."
  },
  {
    type: "choice",
    title: "Java 배열과 예외 처리",
    question: "다음 중 NullPointerException이 발생할 수 있는 경우는?",
    options: [
      "int x = 0;",
      "String s = null; s.length();",
      "배열의 인덱스를 0으로 접근했을 때",
      "0으로 나누었을 때"
    ],
    answer: 1,
    explanation: "null 참조를 통해 메서드나 필드에 접근하면 NullPointerException이 발생합니다."
  },
  {
    type: "choice",
    title: "Java 상속과 다형성",
    question: "다음 중 instanceof 연산자의 사용 목적은 무엇인가요?",
    options: [
      "객체를 생성하기 위해",
      "클래스 상속을 위해",
      "객체가 특정 클래스의 인스턴스인지 확인하기 위해",
      "객체를 복사하기 위해"
    ],
    answer: 2,
    explanation: "instanceof는 객체가 특정 클래스나 인터페이스 타입인지 확인하는 데 사용됩니다."
  },
  {
    type: "choice",
    title: "Java 클래스 및 static",
    question: "생성자(Constructor)에 대한 설명으로 올바른 것은?",
    options: [
      "반드시 return 타입을 명시해야 한다",
      "생성자는 클래스 이름과 다를 수 있다",
      "생성자는 객체가 생성될 때 호출된다",
      "생성자는 오직 하나만 정의할 수 있다"
    ],
    answer: 2,
    explanation: "생성자는 객체 생성 시 호출되며 클래스 이름과 동일해야 하고 return 타입이 없습니다."
  },
  {
    type: "choice",
    title: "Java 클래스 및 static",
    question: "this 키워드의 용도로 적절하지 않은 것은?",
    options: [
      "자기 자신 객체를 참조하기 위해",
      "다른 생성자를 호출하기 위해",
      "정적(static) 메소드를 호출하기 위해",
      "멤버 변수와 지역 변수를 구분하기 위해"
    ],
    answer: 2,
    explanation: "this는 인스턴스 내부에서 자기 자신을 가리키는 참조로 static 메소드와는 관련이 없습니다."
  },
  {
    type: "choice",
    title: "Java 기초 문법",
    question: "다음 중 자바에서 주석을 다는 방법으로 올바르지 않은 것은?",
    options: [
      "// 한 줄 주석",
      "/* 여러 줄 주석 */",
      "/ 한 줄 주석",
      "/** 문서화 주석 */"
    ],
    answer: 2,
    explanation: "`/ 한 줄 주석`은 문법 오류입니다. 한 줄 주석은 //로 시작해야 합니다."
  },
  {
    type: "choice",
    title: "Java 기초 문법",
    question: "자바에서 변수 이름으로 사용할 수 없는 것은?",
    options: [
      "myVar",
      "_myVar",
      "2ndVar",
      "$var"
    ],
    answer: 2,
    explanation: "자바 변수명은 숫자로 시작할 수 없습니다."
  },
  {
    type: "choice",
    title: "Java 기초 문법",
    question: "자바에서 패키지(package)의 주된 목적은?",
    options: [
      "코드 실행 속도 향상",
      "변수 접근 제어",
      "클래스의 논리적 그룹화",
      "객체 직렬화 지원"
    ],
    answer: 2,
    explanation: "패키지는 관련된 클래스들을 논리적으로 그룹화하여 코드 구조를 깔끔하게 유지합니다."
  },
  {
    type: "choice",
    title: "Java 클래스 및 static",
    question: "다음 중 static 블록의 용도는?",
    options: [
      "클래스가 로드될 때 한 번 실행되는 코드 블록",
      "객체가 생성될 때마다 실행되는 블록",
      "인터페이스 정의 시 사용하는 블록",
      "final 변수 초기화 전 확인용 블록"
    ],
    answer: 0,
    explanation: "static 블록은 클래스가 메모리에 로드될 때 단 한 번 실행됩니다."
  },
  {
    type: "choice",
    title: "Java 배열과 예외 처리",
    question: "try-with-resources 구문의 주된 목적은?",
    options: [
      "파일을 자동 저장하기 위해",
      "스레드를 안전하게 종료하기 위해",
      "AutoCloseable 리소스를 자동으로 닫기 위해",
      "try 블록을 생략하기 위해"
    ],
    answer: 2,
    explanation: "try-with-resources는 try 블록에서 사용한 리소스를 자동으로 닫아주는 기능을 제공합니다."
  },
  {
    type: "choice",
    title: "Java 배열과 예외 처리",
    question: "예외(Exception)와 관련된 클래스를 상속하는 최상위 클래스는?",
    options: [
      "Throwable",
      "Error",
      "RuntimeException",
      "Exception"
    ],
    answer: 0,
    explanation: "Throwable은 예외와 에러 클래스의 최상위 클래스입니다."
  },
  {
    type: "choice",
    title: "Java 배열과 예외 처리",
    question: "catch 블록은 언제 실행되나요?",
    options: [
      "예외가 발생하지 않을 때",
      "finally 이후 항상 실행됨",
      "try 블록에서 예외가 발생했을 때",
      "main 함수가 종료될 때"
    ],
    answer: 2,
    explanation: "catch 블록은 try 블록에서 예외가 발생했을 때 해당 예외를 처리하기 위해 실행됩니다."
  },
  {
    type: "choice",
    title: "Java 배열과 예외 처리",
    question: "다음 중 예외 처리를 강제하지 않는 예외는?",
    options: [
      "IOException",
      "SQLException",
      "NullPointerException",
      "FileNotFoundException"
    ],
    answer: 2,
    explanation: "NullPointerException은 RuntimeException의 하위 클래스이므로 컴파일러가 예외 처리를 강제하지 않습니다."
  },
  {
    type: "choice",
    title: "Java 상속과 다형성",
    question: "오버라이딩(overriding)에 대한 설명으로 올바른 것은?",
    options: [
      "매개변수의 개수를 다르게 하는 것",
      "같은 이름의 메소드를 하나의 클래스에 여러 개 정의",
      "상속받은 메소드를 하위 클래스에서 재정의",
      "private 메소드를 외부에서 다시 정의"
    ],
    answer: 2,
    explanation: "오버라이딩은 상속받은 메소드를 동일한 시그니처로 하위 클래스에서 재정의하는 것입니다."
  },
  {
    type: "choice",
    title: "Java 상속과 다형성",
    question: "오버로딩(overloading)은 어떤 경우인가요?",
    options: [
      "다형성 구현",
      "같은 이름의 메소드가 다른 클래스에 정의됨",
      "같은 이름의 메소드를 매개변수 타입/수에 따라 여러 개 정의",
      "인터페이스 구현"
    ],
    answer: 2,
    explanation: "오버로딩은 같은 이름의 메소드를 매개변수의 타입이나 개수를 달리하여 여러 개 정의하는 것입니다."
  },
  {
    type: "choice",
    title: "Java 상속과 다형성",
    question: "다형성을 사용하는 이유로 적절하지 않은 것은?",
    options: [
      "유지 보수성 향상",
      "코드의 유연성 증가",
      "컴파일 타임에 모든 동작 결정",
      "인터페이스 기반 프로그래밍 가능"
    ],
    answer: 2,
    explanation: "다형성은 런타임에서의 동적 바인딩을 활용하므로 컴파일 타임에 모든 동작을 결정하지 않습니다."
  },
  {
    type: "choice",
    title: "Java 상속과 다형성",
    question: "다음 중 인터페이스를 구현할 때 사용하는 키워드는?",
    options: ["extends", "implements", "interface", "inherit"],
    answer: 1,
    explanation: "implements 키워드를 사용하여 인터페이스를 구현합니다."
  },
  {
    type: "choice",
    title: "Java 상속과 다형성",
    question: "다음 중 자바에서 클래스의 다중 상속을 지원하는 방법은?",
    options: [
      "extends 키워드로 여러 클래스 상속",
      "implements 키워드로 여러 클래스 상속",
      "여러 인터페이스를 implements",
      "static 클래스 상속"
    ],
    answer: 2,
    explanation: "자바는 클래스 다중 상속은 지원하지 않지만 인터페이스는 여러 개 구현할 수 있습니다."
  },
  {
    type: "choice",
    title: "Java 상속과 다형성",
    question: "super 키워드는 언제 사용하나요?",
    options: [
      "자기 자신의 멤버를 가리킬 때",
      "상속받은 클래스의 생성자나 멤버를 참조할 때",
      "정적 메소드를 호출할 때",
      "private 멤버를 접근할 때"
    ],
    answer: 1,
    explanation: "super는 상위 클래스의 생성자나 필드, 메소드에 접근할 때 사용됩니다."
  },
  {
    type: "choice",
    title: "Java 상속과 다형성",
    question: "다음 중 final 키워드의 역할이 아닌 것은?",
    options: [
      "클래스를 상속하지 못하게 함",
      "변수를 수정하지 못하게 함",
      "메소드를 오버라이드하지 못하게 함",
      "객체를 직렬화 가능하게 함"
    ],
    answer: 3,
    explanation: "final은 직렬화와 관련이 없으며, 변경 불가능하게 만드는 용도로 사용됩니다."
  },
  {
    type: "choice",
    title: "Java 상속과 다형성",
    question: "추상 클래스와 인터페이스의 공통점은?",
    options: [
      "인스턴스를 생성할 수 있다",
      "모두 필드를 가질 수 있다",
      "모두 메소드 선언만 가능하다",
      "상속 및 구현을 통해 구체 클래스에서 사용된다"
    ],
    answer: 3,
    explanation: "추상 클래스와 인터페이스 모두 직접 인스턴스화 할 수 없고, 구현을 통해 사용됩니다."
  },
  {
    type: "choice",
    title: "Java 배열과 예외 처리",
    question: "try-with-resources 구문의 주된 목적은?",
    options: [
      "파일을 자동 저장하기 위해",
      "스레드를 안전하게 종료하기 위해",
      "AutoCloseable 리소스를 자동으로 닫기 위해",
      "try 블록을 생략하기 위해"
    ],
    answer: 2,
    explanation: "try-with-resources는 try 블록에서 사용한 리소스를 자동으로 닫아주는 기능을 제공합니다."
  },
  {
    type: "choice",
    title: "Java 배열과 예외 처리",
    question: "예외(Exception)와 관련된 클래스를 상속하는 최상위 클래스는?",
    options: [
      "Throwable",
      "Error",
      "RuntimeException",
      "Exception"
    ],
    answer: 0,
    explanation: "Throwable은 예외와 에러 클래스의 최상위 클래스입니다."
  },
  {
    type: "choice",
    title: "Java 배열과 예외 처리",
    question: "catch 블록은 언제 실행되나요?",
    options: [
      "예외가 발생하지 않을 때",
      "finally 이후 항상 실행됨",
      "try 블록에서 예외가 발생했을 때",
      "main 함수가 종료될 때"
    ],
    answer: 2,
    explanation: "catch 블록은 try 블록에서 예외가 발생했을 때 해당 예외를 처리하기 위해 실행됩니다."
  },
  {
    type: "choice",
    title: "Java 배열과 예외 처리",
    question: "다음 중 예외 처리를 강제하지 않는 예외는?",
    options: [
      "IOException",
      "SQLException",
      "NullPointerException",
      "FileNotFoundException"
    ],
    answer: 2,
    explanation: "NullPointerException은 RuntimeException의 하위 클래스이므로 컴파일러가 예외 처리를 강제하지 않습니다."
  },
  {
    type: "choice",
    title: "Java 상속과 다형성",
    question: "오버라이딩(overriding)에 대한 설명으로 올바른 것은?",
    options: [
      "매개변수의 개수를 다르게 하는 것",
      "같은 이름의 메소드를 하나의 클래스에 여러 개 정의",
      "상속받은 메소드를 하위 클래스에서 재정의",
      "private 메소드를 외부에서 다시 정의"
    ],
    answer: 2,
    explanation: "오버라이딩은 상속받은 메소드를 동일한 시그니처로 하위 클래스에서 재정의하는 것입니다."
  },
  {
    type: "choice",
    title: "Java 상속과 다형성",
    question: "오버로딩(overloading)은 어떤 경우인가요?",
    options: [
      "다형성 구현",
      "같은 이름의 메소드가 다른 클래스에 정의됨",
      "같은 이름의 메소드를 매개변수 타입/수에 따라 여러 개 정의",
      "인터페이스 구현"
    ],
    answer: 2,
    explanation: "오버로딩은 같은 이름의 메소드를 매개변수의 타입이나 개수를 달리하여 여러 개 정의하는 것입니다."
  },
  {
    type: "choice",
    title: "Java 상속과 다형성",
    question: "다형성을 사용하는 이유로 적절하지 않은 것은?",
    options: [
      "유지 보수성 향상",
      "코드의 유연성 증가",
      "컴파일 타임에 모든 동작 결정",
      "인터페이스 기반 프로그래밍 가능"
    ],
    answer: 2,
    explanation: "다형성은 런타임에서의 동적 바인딩을 활용하므로 컴파일 타임에 모든 동작을 결정하지 않습니다."
  },
  {
    type: "choice",
    title: "Java 상속과 다형성",
    question: "다음 중 인터페이스를 구현할 때 사용하는 키워드는?",
    options: ["extends", "implements", "interface", "inherit"],
    answer: 1,
    explanation: "implements 키워드를 사용하여 인터페이스를 구현합니다."
  },
  {
    type: "choice",
    title: "Java 상속과 다형성",
    question: "다음 중 자바에서 클래스의 다중 상속을 지원하는 방법은?",
    options: [
      "extends 키워드로 여러 클래스 상속",
      "implements 키워드로 여러 클래스 상속",
      "여러 인터페이스를 implements",
      "static 클래스 상속"
    ],
    answer: 2,
    explanation: "자바는 클래스 다중 상속은 지원하지 않지만 인터페이스는 여러 개 구현할 수 있습니다."
  },
  {
    type: "choice",
    title: "Java 상속과 다형성",
    question: "super 키워드는 언제 사용하나요?",
    options: [
      "자기 자신의 멤버를 가리킬 때",
      "상속받은 클래스의 생성자나 멤버를 참조할 때",
      "정적 메소드를 호출할 때",
      "private 멤버를 접근할 때"
    ],
    answer: 1,
    explanation: "super는 상위 클래스의 생성자나 필드, 메소드에 접근할 때 사용됩니다."
  },
  {
    type: "choice",
    title: "Java 상속과 다형성",
    question: "다음 중 final 키워드의 역할이 아닌 것은?",
    options: [
      "클래스를 상속하지 못하게 함",
      "변수를 수정하지 못하게 함",
      "메소드를 오버라이드하지 못하게 함",
      "객체를 직렬화 가능하게 함"
    ],
    answer: 3,
    explanation: "final은 직렬화와 관련이 없으며, 변경 불가능하게 만드는 용도로 사용됩니다."
  },
  {
    type: "choice",
    title: "Java 상속과 다형성",
    question: "추상 클래스와 인터페이스의 공통점은?",
    options: [
      "인스턴스를 생성할 수 있다",
      "모두 필드를 가질 수 있다",
      "모두 메소드 선언만 가능하다",
      "상속 및 구현을 통해 구체 클래스에서 사용된다"
    ],
    answer: 3,
    explanation: "추상 클래스와 인터페이스 모두 직접 인스턴스화 할 수 없고, 구현을 통해 사용됩니다."
  },



];

// 이 줄을 반드시 추가:
export const programmingQuiz = extendedJavaQuizzes;