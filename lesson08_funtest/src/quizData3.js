export const quizData3 = [
  {
    type: "choice",
    question: "static 키워드에 대한 설명으로 올바른 것은?",
    options: [
      "static 변수는 객체마다 각각 다른 값을 가진다",
      "static 메소드는 인스턴스 변수에 직접 접근할 수 있다",
      "static 변수는 클래스가 메모리에 로드될 때 생성된다",
      "static 메소드는 this 키워드를 사용할 수 있다"
    ],
    answer: 2,
    explanation: "static 변수는 클래스가 메모리에 로드될 때 한 번 생성되며 모든 인스턴스가 공유합니다."
  },
  {
    type: "choice",
    question: `다음 코드의 출력 결과는?\n\npublic class Test {\n    static int count = 0;\n    public Test() { count++; }\n    public static void main(String[] args) {\n        Test t1 = new Test();\n        Test t2 = new Test();\n        System.out.println(Test.count);\n    }\n}`,
    options: ["0", "1", "2", "컴파일 오류"],
    answer: 2,
    explanation: "생성자에서 count++가 두 번 호출되므로 count는 2가 됩니다."
  },
  {
    type: "choice",
    question: "기본 생성자에 대한 설명으로 틀린 것은?",
    options: [
      "매개변수가 없는 생성자이다",
      "명시적으로 생성자를 만들지 않으면 자동으로 제공된다",
      "리턴 값은 기본값이 null이다",
      "객체가 생성될 때만 실행된다"
    ],
    answer: 2,
    explanation: "생성자는 반환형이 없으며 return 값 개념이 적용되지 않습니다."
  },
  {
    type: "choice",
    question: "다음 클래스에서 컴파일 오류가 발생하는 것은?",
    options: [
      "public static void method1() { System.out.println(\"static\"); }",
      "public void method2() { System.out.println(staticVar); }",
      "public static void method3() { System.out.println(instanceVar); }",
      "public static void method4() { method1(); }"
    ],
    answer: 2,
    explanation: "static 메서드는 인스턴스 변수(instanceVar)에 접근할 수 없습니다."
  },
  {
    type: "choice",
    question: `다음 코드에서 빈칸에 들어갈 키워드로 알맞은 것은?\n\npublic class Counter {\n    private int count = 0;\n    private ______ int totalCount = 0;\n\n    public void increment() {\n        count++;\n        ______++;\n    }\n\n    public ______ int getTotalCount() {\n        return totalCount;\n    }`,
    options: ["static, static, static", "final, static, final", "private, public, static", "static, final, public"],
    answer: 0,
    explanation: "`totalCount`는 클래스 전체에서 공유되므로 `static`, 해당 변수와 메소드는 모두 `static`이어야 함."
  },
  {
    type: "choice",
    question: `다음 코드에서 생성자와 메소드의 반환형으로 알맞은 것은?\n\npublic class Calculator {\n    private int result;\n\n    public ______() {\n        result = 0;\n    }\n\n    public ______ add(int num) {\n        result += num;\n    }\n\n    public ______ getResult() {\n        return result;\n    }`,
    options: ["Calculator, void, int", "void, int, void", "Calculator, int, int", "Calculator, void, void"],
    answer: 0,
    explanation: "생성자는 클래스명(Calculator)과 같아야 하며, add는 반환형이 없으므로 void, getResult는 int를 반환."
  },
  {
    type: "choice",
    question: "기본 생성자에 대한 설명으로 옳지 않은 것은?",
    options: [
      "기본 생성자는 매개변수가 없다",
      "기본 생성자는 클래스 내에 하나만 존재할 수 있다",
      "생성자를 명시하지 않으면 기본 생성자가 자동 생성된다",
      "기본 생성자도 오버로딩할 수 있다"
    ],
    answer: 1,
    explanation: "기본 생성자는 매개변수가 없다는 특징 외에도 여러 생성자와 함께 오버로딩 가능하다."
  },
  {
    type: "choice",
    question: "자바에서 static 블록의 사용 목적은?",
    options: [
      "객체가 생성될 때 마다 실행되기 위해",
      "인스턴스 변수를 초기화하기 위해",
      "클래스 로딩 시 초기화 작업을 수행하기 위해",
      "메모리 절약을 위해"
    ],
    answer: 2,
    explanation: "static 블록은 클래스가 처음 로드될 때 한 번만 실행되며 주로 초기화 작업에 사용됨."
  },
  {
    type: "choice",
    question: "static 메서드에 대한 설명 중 틀린 것은?",
    options: [
      "static 메서드는 객체 없이 호출 가능하다",
      "static 메서드는 static 변수만 사용할 수 있다",
      "static 메서드는 this를 사용할 수 없다",
      "static 메서드는 클래스 이름으로 호출하는 것이 일반적이다"
    ],
    answer: 1,
    explanation: "static 메서드도 static이 아닌 로컬 변수는 사용할 수 있으며, 반드시 static 변수만 쓰는 것은 아님."
  },
  {
    type: "choice",
    question: "다음 중 static 키워드에 대한 설명으로 틀린 것은?",
    options: [
      "static 변수는 모든 인스턴스에서 공유된다",
      "static 메서드는 클래스가 로드될 때 함께 로드된다",
      "static 메서드는 오버라이딩이 불가능하다",
      "static 블록은 객체 생성 시마다 실행된다"
    ],
    answer: 3,
    explanation: "static 블록은 객체 생성 시가 아니라 클래스 로딩 시 한 번만 실행된다."
  }
];
