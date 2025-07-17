export const quizData2 = [
  {
    type: "choice",
    title: "Java 문제 1 - 데이터 타입",
    question: "다음 중 자바의 기본 타입(primitive type)이 **아닌** 것은?",
    options: ["int", "String", "boolean", "double"],
    answer: 1,
    explanation: "String은 참조형(객체) 타입으로 기본 타입이 아닙니다."
  },
  {
    type: "choice",
    title: "Java 문제 1 - 불변 객체",
    question: `다음 코드의 출력 결과는?\n\nString str1 = "Hello";\nString str2 = "Hello";\nString str3 = new String("Hello");\n\nSystem.out.println(str1 == str2);\nSystem.out.println(str1 == str3);`,
    options: ["true\ntrue", "false\nfalse", "true\nfalse", "false\ntrue"],
    answer: 2,
    explanation: "str1과 str2는 같은 문자열 리터럴이므로 true, str3은 new 연산자로 새 객체이므로 false"
  },
  {
    type: "choice",
    title: "Java 문제 1 - 참조값 비교",
    question: `다음 코드의 출력 결과는?\n\nPerson p1 = new Person();\nPerson p2 = new Person();\nPerson p3 = p1;\n\nSystem.out.println(p1 == p2);\nSystem.out.println(p1 == p3);`,
    options: ["false\nfalse", "true\nfalse", "false\ntrue", "true\ntrue"],
    answer: 2,
    explanation: "p1과 p2는 서로 다른 객체이므로 false, p3는 p1과 동일한 참조이므로 true"
  },
  {
    type: "choice",
    title: "Java 문제 1 - toString 재정의",
    question: "다음 중 Student 클래스에서 toString()을 재정의하여 \"이름: 홍길동, 나이: 20\"을 출력하는 방법은?",
    options: [
      "public String toString() { return name + age; }",
      "public String toString() { return \"이름: \" + name + \", 나이: \" + age; }",
      "public String toString() { System.out.println(name + age); }",
      "toString() 메소드는 재정의할 수 없다"
    ],
    answer: 1,
    explanation: "toString()은 객체 정보를 문자열로 반환하는 메소드로, \"이름: 홍길동, 나이: 20\" 형식의 문자열을 리턴해야 합니다."
  },
  {
    type: "choice",
    title: "Java 문제 1 - static 메소드",
    question: "다음 중 static 메소드의 특징으로 올바른 것은?",
    options: [
      "객체를 생성해야만 호출할 수 있다",
      "클래스 이름으로 직접 호출할 수 있다",
      "모든 변수에 자유롭게 접근할 수 있다",
      "오버라이딩이 가능하다"
    ],
    answer: 1,
    explanation: "static 메소드는 객체 생성 없이 클래스 이름으로 호출할 수 있습니다."
  },
  {
    type: "choice",
    title: "Java 문제 1 - 반복문",
    question: "다음 중 2의 n승을 for문으로 계산하는 올바른 방식은?",
    options: [
      "반복문 없이 Math.pow()만 사용한다",
      "곱하기 대신 더하기를 반복한다",
      "1에서 시작해 반복문 내에서 2를 곱한다",
      "0부터 시작해 2를 곱한다"
    ],
    answer: 2,
    explanation: "2^n을 계산할 때는 1에서 시작해서 n번 2를 곱해야 합니다."
  },
  {
    type: "choice",
    title: "Java 문제 1 - 오버플로우",
    question: "다음 코드 실행 결과로 옳은 것은?\n\nbyte b = 127;\nb++;\nSystem.out.println(b);",
    options: ["-128", "128", "0", "127"],
    answer: 0,
    explanation: "byte의 범위를 초과하면 오버플로우가 발생하여 -128이 됩니다."
  },
  {
    type: "choice",
    title: "Java 문제 1 - 변수 스코프",
    question: "다음 코드에서 컴파일 에러가 발생하는 이유는?",
    options: [
      "main 메소드가 없어서",
      "if 블록 내에서 선언된 변수는 외부에서 사용할 수 없기 때문에",
      "x가 초기화되지 않아서",
      "System.out.println 문법 오류"
    ],
    answer: 1,
    explanation: "지역 변수 x는 if 블록 안에서 선언되었기 때문에 블록을 벗어나면 사용할 수 없습니다."
  },
  {
    type: "choice",
    title: "Java 문제 1 - switch문",
    question: "다음 중 switch 문을 사용할 때 적절한 방식은?",
    options: [
      "정수 값에 따라 case를 나누고 break를 생략한다",
      "정수 값을 10으로 나눈 몫을 기준으로 case 분기할 수 있다",
      "문자열을 사용할 수 없다",
      "default 문은 필수다"
    ],
    answer: 1,
    explanation: "grade 값을 10으로 나눈 몫으로 분기하면 90~100은 9, 80~89는 8로 분류할 수 있습니다."
  }
];
