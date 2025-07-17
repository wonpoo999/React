export const quizData4 = [
  {
    type: "choice",
    title: "Java 문제 3 - 배열 출력 결과",
    question: "다음 코드의 출력 결과는?\n\nint[] arr = {10, 20, 30, 40, 50};\nSystem.out.println(arr.length);\narr[2] = 100;\nSystem.out.println(arr[2]);",
    options: ["4, 30", "5, 30", "5, 100", "4, 100"],
    answer: 2,
    explanation: "arr.length는 배열의 길이인 5를 반환하고, arr[2]는 100으로 변경됨."
  },
  {
    type: "choice",
    title: "Java 문제 3 - 객체 배열 설명",
    question: "다음 중 객체 배열에 대한 설명으로 올바른 것은?\n\nString[] names = new String[3];\nnames[0] = \"Alice\";",
    options: [
      "names 배열의 모든 요소는 자동으로 빈 문자열(\"\")로 초기화된다",
      "names[1]과 names[2]는 null 값을 가진다",
      "names.length는 실제 저장된 문자열의 개수를 반환한다",
      "배열 크기는 동적으로 변경할 수 있다"
    ],
    answer: 1,
    explanation: "참조형 배열은 초기화되지 않은 요소가 null 값을 가짐."
  },
  {
    type: "choice",
    title: "Java 문제 3 - 배열 예외",
    question: "다음 코드에서 발생하는 예외는?\n\nint[] numbers = {1, 2, 3};\nSystem.out.println(numbers[5]);",
    options: [
      "NullPointerException",
      "ArrayIndexOutOfBoundsException",
      "IllegalArgumentException",
      "NumberFormatException"
    ],
    answer: 1,
    explanation: "존재하지 않는 인덱스에 접근하면 ArrayIndexOutOfBoundsException 발생."
  },
  {
    type: "choice",
    title: "Java 문제 3 - try-catch 결과",
    question: "다음 try-catch 구문에서 출력 결과는?\n\ntry {\n    int result = 10 / 0;\n    System.out.println(\"계산 완료\");\n} catch (ArithmeticException e) {\n    System.out.println(\"연산 오류\");\n} finally {\n    System.out.println(\"마무리\");\n}\nSystem.out.println(\"프로그램 종료\");",
    options: [
      "계산 완료, 마무리, 프로그램 종료",
      "연산 오류, 마무리, 프로그램 종료",
      "연산 오류, 프로그램 종료",
      "마무리, 프로그램 종료"
    ],
    answer: 1,
    explanation: "0으로 나누면 ArithmeticException이 발생하고, catch와 finally 블록이 실행됨."
  },
  {
    type: "choice",
    title: "Java 문제 3 - 배열 반복 조건",
    question: "다음 코드에서 반복 조건으로 올바른 것은?\n\nStudent[] students = new Student[3];\nstudents[0] = new Student(\"김철수\", 20);\nstudents[1] = new Student(\"이영희\", 22);\n\nfor (int i = 0; i < students.______; i++) {\n    if (students[i] != ______) {\n        System.out.println(students[i].getName());\n    }\n}",
    options: [
      "length, null",
      "size, undefined",
      "length(), null",
      "size(), \"\""
    ],
    answer: 0,
    explanation: "`배열.length`는 배열의 길이이며, 참조형 배열은 null 여부를 검사하여 사용합니다."
  },
  {
    type: "choice",
    title: "Java 문제 3 - 2차원 배열 반복",
    question: "다음 2차원 배열 코드의 빈칸에 들어갈 올바른 반복 조건은?\n\nint[][] matrix = {{1, 2, 3, 4}, {4, 5, 6 , 7}, {7, 8, 9, 10}};\n\nfor (int i = 0; i < matrix.______; i++) {\n    for (int j = 0; j < matrix[i].______; j++) {\n        System.out.print(matrix[i][j] + \" \");\n    }\n}",
    options: [
      "length, length",
      "length, size",
      "size, size",
      "length, length()"
    ],
    answer: 0,
    explanation: "2차원 배열은 첫 차원은 배열 행 수 (`length`), 두 번째는 열 수 (`length`)입니다."
  },
  {
    type: "choice",
    title: "Java 문제 3 - 예외 던지기",
    question: "다음 예외 처리 코드에서 올바르게 빈칸을 채운 것은?\n\npublic void divide(int a, int b) ______ ArithmeticException {\n    if (b == 0) {\n        ______ new ArithmeticException(\"0으로 나눌 수 없습니다\");\n    }\n    System.out.println(a / b);\n}",
    options: [
      "throws, throw",
      "throw, throws",
      "catch, throw",
      "throws, catch"
    ],
    answer: 0,
    explanation: "예외를 발생시키는 코드는 `throw`, 메소드 선언 시 예외를 던질 수 있음을 나타내는 키워드는 `throws`입니다."
  },
  {
    type: "choice",
    title: "Java 문제 3 - 배열 복사",
    question: "다음 배열 복사 코드에서 올바른 구문은?\n\nint[] original = {1, 2, 3, 4, 5};\nint[] copy = new int[original.______];\n\nfor (int i = 0; i < original.______; i++) {\n    copy[i] = original[i];\n}\n\n// 또는 System.arraycopy 사용\nSystem.______(original, 0, copy, 0, original.______);",
    options: [
      "length, length, arraycopy, length",
      "size, size, copyArray, size",
      "length(), length(), clone, length()",
      "size(), size(), arraycopy, size()"
    ],
    answer: 0,
    explanation: "배열 복사 시 모든 빈칸은 `length` 또는 `System.arraycopy`가 들어가는 것이 정석입니다."
  }
];
