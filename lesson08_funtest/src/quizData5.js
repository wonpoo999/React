export const quizData5 = [
  {
    type: "choice",
    title: "Java 문제 4 - 상속 키워드",
    question: "자바에서 클래스 간의 상속을 나타내는 키워드는?",
    options: ["import", "super", "extends", "this"],
    answer: 2,
    explanation: "`extends`는 자식 클래스가 부모 클래스를 상속받을 때 사용하는 키워드입니다."
  },
  {
    type: "choice",
    title: "Java 문제 4 - 오버라이딩 어노테이션",
    question: "다음 코드에서 Dog 클래스의 sound 메서드에 들어갈 어노테이션으로 적절한 것은?\n\nclass Dog extends Animal {\n    ______\n    void sound() { System.out.println(\"Woof\"); }\n}",
    options: ["@Overload", "@Override", "@Super", "@Extend"],
    answer: 1,
    explanation: "`@Override`는 부모 클래스의 메서드를 재정의할 때 사용하는 어노테이션입니다."
  },
  {
    type: "choice",
    title: "Java 문제 4 - 생성자 호출 키워드",
    question: "부모 클래스의 생성자를 자식 클래스에서 호출할 때 사용하는 키워드는?",
    options: ["this", "super", "extends", "override"],
    answer: 1,
    explanation: "부모 생성자는 `super()`를 사용해 자식 클래스 생성자 내에서 호출합니다."
  },
  {
    type: "choice",
    title: "Java 문제 4 - super()의 위치",
    question: "자식 클래스 생성자에서 super()는 어디에 와야 하는가?",
    options: ["마지막 줄", "메소드 내 자유 위치", "this() 다음", "첫 줄"],
    answer: 3,
    explanation: "super()는 생성자의 첫 줄에 반드시 위치해야 합니다."
  },
  {
    type: "choice",
    title: "Java 문제 4 - 런타임 바인딩",
    question: "런타임에 객체의 실제 타입에 따라 메서드가 호출되는 것을 무엇이라 하는가?",
    options: ["정적 바인딩", "선언 바인딩", "동적 바인딩", "오버로딩"],
    answer: 2,
    explanation: "실제 객체 타입에 따라 호출되는 것은 '동적 바인딩' 혹은 '런타임 바인딩'입니다."
  },
  {
    type: "choice",
    title: "Java 문제 4 - 최상위 클래스",
    question: "자바에서 모든 클래스가 기본적으로 상속받는 최상위 클래스의 이름은?",
    options: ["Object", "Class", "Main", "Super"],
    answer: 0,
    explanation: "`Object`는 모든 클래스가 상속하는 최상위 클래스입니다."
  },
  {
    type: "choice",
    title: "Java 문제 4 - 메서드 재정의 용어",
    question: "부모 클래스의 메서드를 자식 클래스에서 재정의하는 것을 무엇이라고 하는가?",
    options: ["Overloading", "Inheritance", "Overriding", "Casting"],
    answer: 2,
    explanation: "같은 시그니처의 메서드를 자식 클래스에서 다시 정의하는 것은 `Overriding`입니다."
  },
  {
    type: "choice",
    title: "Java 문제 4 - 다형성 정의",
    question: "하나의 참조변수로 여러 타입의 객체를 참조할 수 있는 특성을 무엇이라고 하는가?",
    options: ["상속", "오버로딩", "다형성", "인터페이스"],
    answer: 2,
    explanation: "다형성(polymorphism)은 하나의 참조변수가 여러 객체를 가리킬 수 있는 객체지향 개념입니다."
  },
  {
    type: "choice",
    title: "Java 문제 4 - 필드 숨김 출력 결과",
    question: "다음 코드의 출력 결과는?\n\nclass A { int x = 10; }\nclass B extends A { int x = 20; void print() { System.out.println(x + \" \" + super.x); } }\n\nB b = new B(); b.print();",
    options: ["20 10", "10 20", "20 20", "10 10"],
    answer: 0,
    explanation: "자식의 x는 20, super.x는 부모의 x인 10이므로 출력은 '20 10'입니다."
  },
  {
    type: "choice",
    title: "Java 문제 4 - protected 접근제한자",
    question: "부모 클래스에서 자식 클래스만 사용할 수 있도록 하는 접근 제한자는?",
    options: ["private", "default", "protected", "public"],
    answer: 2,
    explanation: "`protected`는 같은 패키지 또는 상속 관계에서 접근을 허용합니다."
  },
  {
    type: "choice",
    title: "Java 문제 4 - 상속 특징",
    question: "다음 중 상속의 특징으로 올바르지 않은 것은?",
    options: [
      "자식 클래스는 부모 클래스의 모든 멤버를 상속받는다",
      "자바에서는 다중 상속을 지원한다",
      "private 멤버는 상속되지만 접근할 수 없다",
      "생성자는 상속되지 않는다"
    ],
    answer: 1,
    explanation: "자바는 클래스 간 다중 상속을 지원하지 않습니다 (단, 인터페이스는 가능)."
  },
  {
    type: "choice",
    title: "Java 문제 4 - 동적 바인딩 출력",
    question: "다음 코드의 실행 결과는?\n\nclass Parent { void method() { System.out.print(\"Parent \"); } }\nclass Child extends Parent { void method() { System.out.print(\"Child \"); } }\nParent p = new Child(); p.method();",
    options: ["Parent", "Child", "Parent Child", "컴파일 오류"],
    answer: 1,
    explanation: "동적 바인딩으로 인해 실제 객체인 Child의 메서드가 호출되어 'Child'가 출력됩니다."
  },
  {
    type: "choice",
    title: "Java 문제 4 - 오버라이딩 조건",
    question: "다음 중 메서드 오버라이딩의 조건으로 올바르지 않은 것은?",
    options: [
      "메서드명이 같아야 한다",
      "매개변수의 개수와 타입이 같아야 한다",
      "반환형이 같아야 한다",
      "접근 제한자는 부모보다 더 제한적이어야 한다"
    ],
    answer: 3,
    explanation: "접근 제한자는 부모보다 같거나 더 넓어야 합니다."
  },
  {
    type: "choice",
    title: "Java 문제 4 - 다형성 장점",
    question: "다음 중 다형성의 장점이 아닌 것은?",
    options: [
      "코드의 재사용성 증가",
      "유지보수의 편의성",
      "실행 속도의 향상",
      "확장성과 유연성 제공"
    ],
    answer: 2,
    explanation: "다형성은 실행 속도를 향상시키기보다는 유연성과 확장성을 제공합니다."
  },
  {
    type: "choice",
    title: "Java 문제 4 - super 키워드 사용법",
    question: "super 키워드의 사용법으로 올바르지 않은 것은?",
    options: [
      "super.method() - 부모 클래스의 메서드 호출",
      "super() - 부모 클래스의 생성자 호출",
      "super.field - 부모 클래스의 필드 접근",
      "super.super.method() - 조부모 클래스의 메서드 호출"
    ],
    answer: 3,
    explanation: "`super.super`와 같은 조부모 접근은 자바에서 문법적으로 지원하지 않습니다."
  }
];
