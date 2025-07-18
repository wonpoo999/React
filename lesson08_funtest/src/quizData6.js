// 파일: src/quizData6.js

export const quizData6 = [
  {
    type: "choice",
    title: "Java 추상 클래스와 인터페이스",
    question: "다음 중 추상 클래스에 대한 설명으로 올바른 것은?",
    options: [
      "추상 클래스는 생성자를 가질 수 없다",
      "추상 클래스는 일반 메서드를 가질 수 없다",
      "추상 클래스는 인스턴스를 직접 생성할 수 있다",
      "추상 클래스는 추상 메서드와 일반 메서드를 모두 가질 수 있다",
      "추상 클래스는 다중 상속이 가능하다"
    ],
    answer: 3,
    explanation: "추상 클래스는 추상 메서드와 일반 메서드를 모두 가질 수 있으며 생성자도 정의 가능하지만 직접 인스턴스화할 수는 없습니다."
  },
  {
    type: "choice",
    title: "Java 추상 클래스와 인터페이스",
    question: "인터페이스에 대한 설명으로 틀린 것은?",
    options: [
      "인터페이스의 변수는 자동으로 public static final이다",
      "자바 8 이후 default 메서드와 static 메서드를 가질 수 있다",
      "인터페이스는 생성자를 가질 수 있다",
      "인터페이스는 다중 구현이 가능하다",
      "인터페이스의 메서드는 기본적으로 public abstract이다"
    ],
    answer: 2,
    explanation: "인터페이스는 생성자를 가질 수 없습니다."
  },
  {
    type: "choice",
    title: "Java 추상 클래스와 인터페이스",
    question: "다음 코드의 실행 결과는?\n\ninterface Flyable {\n  default void fly() {\n    System.out.println(\"Flying high\");\n  }\n}\n\nclass Bird implements Flyable {\n  public void fly() {\n    System.out.println(\"Bird is flying\");\n  }\n}\n\npublic class Test {\n  public static void main(String[] args) {\n    Flyable bird = new Flyable(){};\n    bird.fly();\n  }\n}",
    options: [
      "Flying high",
      "Bird is flying",
      "컴파일 에러",
      "런타임 에러",
      "아무것도 출력되지 않음"
    ],
    answer: 0,
    explanation: "익명 클래스에서 fly()를 오버라이딩하지 않았기 때문에 default 메서드가 호출됩니다."
  },
  {
    type: "choice",
    title: "Java 추상 클래스와 인터페이스",
    question: "다음 중 올바른 코드는?",
    options: [
      "abstract class A { abstract A() { } }",
      "interface B { private int x = 10; }",
      "abstract class C { abstract void method(); void normalMethod() { } }",
      "interface D { void method() {} }",
      "class E extends A, B { }"
    ],
    answer: 2,
    explanation: "추상 클래스는 추상 메서드와 일반 메서드를 함께 가질 수 있습니다."
  },
  {
    type: "choice",
    title: "Java 추상 클래스와 인터페이스",
    question: "다음 코드에서 컴파일 에러가 발생하는 이유는?",
    options: [
      "Shape 클래스가 추상 클래스이므로",
      "Circle 클래스에 생성자가 있으므로",
      "radius 변수가 private이 아니므로",
      "추상 메서드 getArea()를 구현하지 않았으므로",
      "컴파일 에러가 발생하지 않음"
    ],
    answer: 3,
    explanation: "추상 메서드를 구현하지 않으면 컴파일 에러가 발생합니다."
  },
  {
    type: "choice",
    title: "Java 추상 클래스와 인터페이스",
    question: "다음 클래스 정의의 오류를 해결하기 위한 방법은?",
    options: [
      "start 메서드를 삭제한다",
      "Vehicle 클래스를 interface로 바꾼다",
      "start 메서드를 final로 선언한다",
      "start 메서드에 구현을 추가하거나 abstract로 선언한다",
      "생성자를 private으로 변경한다"
    ],
    answer: 3,
    explanation: "본문 없는 메서드는 abstract로 선언하거나 구현을 작성해야 합니다."
  },
  {
    type: "choice",
    title: "Java 추상 클래스와 인터페이스",
    question: "다음 인터페이스 구현 코드의 빈칸에 들어갈 알맞은 키워드는?\n\ninterface Drawable {\n  int MAX_SIZE = 100;\n  void draw();\n  _______ void print() {\n    System.out.println(\"Drawing...\");\n  }\n}",
    options: [
      "private",
      "abstract",
      "final",
      "default",
      "protected"
    ],
    answer: 3,
    explanation: "인터페이스에서 본문이 있는 메서드는 default 키워드를 사용해야 합니다."
  },
  {
    type: "choice",
    title: "Java 추상 클래스와 인터페이스",
    question: "다중 인터페이스 구현 코드의 빈칸에 들어갈 올바른 조합은?",
    options: [
      "void read(); / Writable",
      "Writable / void read();",
      "Readable / Writable",
      "void read(); / void write();",
      "Writable / Readable"
    ],
    answer: 0,
    explanation: "Readable 인터페이스에 read 메서드 정의가 필요하고, 클래스는 Writable을 함께 구현해야 합니다."
  },
  {
    type: "choice",
    title: "Java 추상 클래스와 인터페이스",
    question: "Comparable 인터페이스 구현 코드의 오류를 해결하려면?",
    options: [
      "compareTo 메서드의 반환 타입을 void로 변경한다",
      "int로 강제 형변환한다",
      "this.price - other.price를 유지한다",
      "Double.compare(this.price, other.price)를 사용한다",
      "compareTo 메서드를 static으로 선언한다"
    ],
    answer: 3,
    explanation: "double을 직접 빼면 오차가 발생할 수 있어 비교는 Double.compare()를 사용하는 것이 안전합니다."
  },
  {
    type: "choice",
    title: "Java 추상 클래스와 인터페이스",
    question: "깊은 복사(deep copy)와 얕은 복사(shallow copy)의 차이는?",
    options: [
      "깊은 복사는 참조만 복사한다",
      "얕은 복사는 새로운 객체를 생성한다",
      "깊은 복사는 동일한 참조를 공유한다",
      "얕은 복사는 내부 필드까지 모두 복제한다",
      "깊은 복사는 객체 내부 필드까지 모두 복사한다"
    ],
    answer: 4,
    explanation: "깊은 복사는 객체의 내부 구조까지 모두 복사하여 원본과 완전히 분리됩니다."
  },
  {
    type: "choice",
    title: "Java 추상 클래스와 인터페이스",
    question: "다음 중 Comparable 인터페이스에 대한 설명으로 올바른 것은?",
    options: [
      "compareTo()는 boolean을 반환한다",
      "음수를 반환하면 현재 객체가 더 크다는 의미이다",
      "0을 반환하면 두 객체가 같다",
      "Comparable을 구현하면 equals()도 자동 구현된다",
      "compareTo()는 static 메서드다"
    ],
    answer: 2,
    explanation: "compareTo()가 0을 반환하면 두 객체가 같음을 의미합니다."
  },
  {
    type: "choice",
    title: "Java 추상 클래스와 인터페이스",
    question: "Cloneable 인터페이스에 대한 설명으로 틀린 것은?",
    options: [
      "Cloneable은 마커 인터페이스이다",
      "clone()은 Object 클래스에 정의되어 있다",
      "Cloneable을 구현하지 않으면 예외가 발생할 수 있다",
      "clone()은 깊은 복사를 자동 수행한다",
      "clone()은 protected로 선언되어 있으며 public으로 변경할 수 있다"
    ],
    answer: 3,
    explanation: "clone()은 기본적으로 얕은 복사를 수행하며, 깊은 복사는 개발자가 직접 구현해야 합니다."
  },
{
  type: "ox",
  title: "Java 추상 클래스와 인터페이스",
  question: `다음 빈칸을 O, X로 표기하세요.

| 접근 제어자 | 같은 클래스 | 같은 패키지 | 자식(하위) 클래스 | 전체 접근 |
|-------------|--------------|--------------|-------------------|--------------|
| private     | (1)          | ❌           | ❌                | ❌           |
| (default)   | ⭕           | ⭕           | (2)               | ❌           |
| protected   | ⭕           | ⭕           | (3)               | ❌           |
| public      | ⭕           | ⭕           | ⭕                | ⭕           |
`,
  subQuestions: ["(1)", "(2)", "(3)"],
  answer: ["O", "X", "O"],
  explanation: "접근 제어자의 범위에 따라 각 빈칸을 O 또는 X로 표기합니다. (1)=같은 클래스에서 private 접근 가능(O), (2)=default는 자식 클래스에서 접근 불가(X), (3)=protected는 자식 클래스에서 접근 가능(O)"
},
{
  type: "ox-sentence",
  title: "Java 추상 클래스와 인터페이스",
  question: "상속 시 접근 권한 변경 규칙에 대한 설명입니다. O, X를 표시하세요.",
  subQuestions: [
    "1. 하위 클래스에서 부모 클래스의 접근 제어자를 변경할 수 있다.",
    "2. 더 좁은 범위로는 접근 권한을 줄일 수 있다.",
    "3. protected 접근 권한을 public으로 변경할 수 있다."
  ],
  answer: ["X", "X", "O"],
  explanation: `1번: 접근 제어자 자체를 하위 클래스에서 변경할 수는 없습니다 (X)
2번: 부모보다 좁은 접근 권한으로 override 불가 (X)
3번: protected → public 확장은 허용됩니다 (O)`
}

];
