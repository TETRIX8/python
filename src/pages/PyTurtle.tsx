import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CodeBlock } from "@/components/CodeBlock";
import { QuizQuestion } from "@/components/QuizQuestion";
import { CodeQuestion } from "@/components/CodeQuestion";
import { useNavigate } from "react-router-dom";

const PyTurtle = () => {
  const [progress, setProgress] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [codeScore, setCodeScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(0);
  const [codeCompleted, setCodeCompleted] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleQuizAnswer = (isCorrect: boolean) => {
    setQuizCompleted(quizCompleted + 1);
    if (isCorrect) {
      setQuizScore(quizScore + 1);
    }
    updateProgress();
  };

  const handleCodeAnswer = (isCorrect: boolean) => {
    setCodeCompleted(codeCompleted + 1);
    if (isCorrect) {
      setCodeScore(codeScore + 1);
    }
    updateProgress();
  };

  const updateProgress = () => {
    const totalQuestions = 10 + 5; // 10 quiz questions + 5 code questions
    const completed = quizCompleted + codeCompleted;
    setProgress(Math.round((completed / totalQuestions) * 100));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Загрузка...</h2>
          <Progress value={30} className="w-64 animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex justify-between items-center">
          <Button 
            variant="outline" 
            onClick={() => navigate("/topics")}
            className="hover:bg-primary/10"
          >
            Назад к темам
          </Button>
          <div className="flex-1 mx-8">
            <Progress value={progress} className="h-2" />
          </div>
          <div className="text-sm font-medium">
            Прогресс: {progress}%
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8 animate-fade-up">
          Рисование с помощью PyTurtle
        </h1>

        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          <Card className="p-6 bg-white">
            <div className="prose max-w-none">
              <p>Чтобы рисовать при помощи питона, надо написать вот это "заклинание":</p>
              
              <CodeBlock 
                code={`!pip3 install ColabTurtle
from ColabTurtle.Turtle import *`} 
                description="Пока не будем вдаваться в подробности того, что здесь написано."
              />
              
              <p>Полный список команд CollabTurtle внизу страницы: <a href="https://github.com/tolgaatam/ColabTurtle" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/tolgaatam/ColabTurtle</a></p>
              <p>Размер окна CollabTurtle (800,500). Начало координато сверху-слева.</p>
              
              <p>Нарисуем наш первый рисунок:</p>
              
              <CodeBlock 
                code={`initializeTurtle()

forward(100)
right(90)
forward(100)
right(90)
forward(100)
right(90)
forward(100)`} 
              />
              
              <p>Разберем, что здесь написано. В первой строке вводится комнда initializeTurtle(). Любой рисунок с использованием черепашки на питоне (Только в GOOGLE COLLAB) должен начинаться с этой команды.</p>
              
              <p>Далее идут команды для черепашки.</p>
              
              <p>Команда forward("Число") двигает черепаху вперед на "Число" и рисует линию.</p>
              
              <p>Команда right("Угол поворота") поворачивает черепаху на указанное число градусов вправо.</p>
              
              <p>Нарисуем еще рисунок и познакомимся с другими командами:</p>
              
              <CodeBlock 
                code={`initializeTurtle()

left(60)
forward(50)
left(60)
forward(50)
left(60)
forward(50)
left(60)
forward(50)
left(60)
forward(50)
left(60)
forward(50)`} 
              />
              
              <p>Чтобы повернуть наево, используется команда left()</p>
              
              <p>Сделаем наш код выше немного короче при помощи циклов:</p>
              
              <CodeBlock 
                code={`initializeTurtle()

# Рисуем шестиугольник
for i in range(0, 6):
  left(60)
  forward(50)`} 
              />
              
              <p>Давайте превратим этот шестиугольник в подобие объемного куба:</p>
              
              <CodeBlock 
                code={`initializeTurtle()

# Рисуем шестиугольник
for i in range(0, 6):
  left(60)
  forward(50)
  
# Дорисовываем грани куба
left(120)
forward(50)
right(60)
forward(50)
backward(50) # Двигает черепаху назад на заданное значение
left(120)
forward(50)

hideturtle() # прячет черепаху`} 
              />
              
              <p>Попробуем нарисовать круг, а его уже дорисовать до смайлика:</p>
              
              <CodeBlock 
                code={`initializeTurtle()
# Подвинем черепаху,  установив координату по y на 100
penup() # Поднимает "ручку"
sety(100)
left(90) # Повернем черепаху, чтобы круг оказался по центру
pendown() # Опускает "ручку"

speed(13) # меняет скорость рисования черепахи, 
# максимально значение 13, минимальное 1.
for i in range(0, 60): 
  forward(12)
  left(6)`} 
              />
              
              <p>Команда penup() поднмает "ручку" и черепаха перестает рисовать при движении. pendown() - дает черепахе снвоа рисовать. setx() устанавливает черепеху по координате x на указанное значение. Есть такая же команда sety(). Теперь переметим черепаху на начальную позицию при помощи команды home() и нарисуем глаза.</p>
              
              <CodeBlock 
                code={`initializeTurtle()
# Подвинем черепаху,  установив координату по y на 100
penup() # Поднимает "ручку"
sety(100)
left(90) # Повернем черепаху, чтобы круг оказался по центру
pendown() # Опускает "ручку"

speed(13) # меняет скорость рисования черепахи, максимально значение 13, минимальное 1.

# Цикл рисует круг
for i in range(0, 60): 
  forward(12)
  left(6)

penup()
home()
goto(450,150) # Координата правого глаза
left(90)
pendown()

# Цикл рисует глаз
for i in range(0, 60): 
  forward(3)
  left(6)

penup()
home()
goto(350,150) # Координата левого глаза
left(90)
pendown()

# Рисует глаз
for i in range(0, 60): 
  forward(3)
  left(6)`} 
              />
              
              <p>Теперь осталось нарисовать рот:</p>
              
              <CodeBlock 
                code={`initializeTurtle()
# Подвинем черепаху,  установив координату по y на 100
penup() # Поднимает "ручку"
sety(100)
left(90) # Повернем черепаху, чтобы круг оказался по центру
pendown() # Опускает "ручку"

speed(13) # меняет скорость рисования черепахи, максимально значение 13, минимальное 1.

# Цикл рисует круг
for i in range(0, 60): 
  forward(12)
  left(6)

penup()
home()
goto(450,150) # Координата правого глаза
left(90)
pendown()

# Цикл рисует глаз
for i in range(0, 60): 
  forward(3)
  left(6)

penup()
home()
goto(350,150) # Координата левого глаза
left(90)
pendown()

# Рисует глаз
for i in range(0, 60): 
  forward(3)
  left(6)

penup()
home()
goto(360, 250) #Координата рта
pendown()

# Рисует рот
for i in range(0,180):
  backward(0.7)
  left(1)`} 
              />
              
              <p>Осталось только покрасить наш смайлик в желтый цвет, и изменим цвет фона. Добавим пару строк кода в начало:</p>
              
              <CodeBlock 
                code={`initializeTurtle()

# Изменить цвет пера
pencolor("Gold")
# Изменить цвет фона
bgcolor("Teal")
# Подвинем черепаху,  установив координату по y на 100
penup() # Поднимает "ручку"
sety(100)
left(90) # Повернем черепаху, чтобы круг оказался по центру
pendown() # Опускает "ручку"

speed(13) # меняет скорость рисования черепахи, максимально значение 13, минимальное 1.

# Цикл рисует круг
for i in range(0, 60): 
  forward(12)
  left(6)

penup()
home()
goto(450,150) # Координата правого глаза
left(90)
pendown()

# Цикл рисует глаз
for i in range(0, 60): 
  forward(3)
  left(6)

penup()
home()
goto(350,150) # Координата левого глаза
left(90)
pendown()

# Рисует глаз
for i in range(0, 60): 
  forward(3)
  left(6)

penup()
home()
goto(360, 250)
pendown()

# Рисует рот
for i in range(0,180):
  backward(0.7)
  left(1)`} 
              />
              
              <p>Задание, написать код, который будет рисовать треугольник, квадрат, пятиугольник. Понять закономерность и после написать код, который будет рисовать многоульник с заданным количетсвом уголов. Решение:</p>
              
              <CodeBlock 
                code={`initializeTurtle()
# Треугольник
for i in range(0,3):
    forward(100)
    left(120)`} 
              />
              
              <CodeBlock 
                code={`initializeTurtle()
# Квадрат
for i in range(0,4):
    forward(100)
    left(90)`} 
              />
              
              <CodeBlock 
                code={`initializeTurtle()
# Пятиугольник
for i in range(0,5):
    forward(100)
    left(72)`} 
              />
              
              <CodeBlock 
                code={`initializeTurtle()
edges = int(input())
# Многоугольник
for i in range(0,edges):
    forward(100)
    left(360/edges)`} 
              />
              
              <p>Если осталось время, дети могут попрактиковаться в рисовании самостоятельно. Например попробовать нарисовать объемную фигуру - цилиндр, призма и т.п.</p>
            </div>
          </Card>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Проверьте свои знания</h2>
            
            <QuizQuestion
              question="Какая команда инициализирует черепашку в Python?"
              options={["startTurtle()", "initializeTurtle()", "createTurtle()", "beginTurtle()"]}
              correctAnswer="initializeTurtle()"
              onAnswer={handleQuizAnswer}
            />
            
            <QuizQuestion
              question="Какая команда перемещает черепашку вперед?"
              options={["move()", "forward()", "go()", "step()"]}
              correctAnswer="forward()"
              onAnswer={handleQuizAnswer}
            />
            
            <QuizQuestion
              question="Какая команда поворачивает черепашку вправо?"
              options={["right()", "turnRight()", "rotateRight()", "clockwise()"]}
              correctAnswer="right()"
              onAnswer={handleQuizAnswer}
            />
            
            <QuizQuestion
              question="Какая команда поднимает перо черепашки (прекращает рисование)?"
              options={["penup()", "noDraw()", "stopDrawing()", "liftPen()"]}
              correctAnswer="penup()"
              onAnswer={handleQuizAnswer}
            />
            
            <QuizQuestion
              question="Какая команда устанавливает координату Y черепашки?"
              options={["moveY()", "setY()", "sety()", "goToY()"]}
              correctAnswer="sety()"
              onAnswer={handleQuizAnswer}
            />
            
            <QuizQuestion
              question="Какая команда возвращает черепашку в начальную позицию?"
              options={["reset()", "home()", "start()", "origin()"]}
              correctAnswer="home()"
              onAnswer={handleQuizAnswer}
            />
            
            <QuizQuestion
              question="Какая команда скрывает черепашку с экрана?"
              options={["hideTurtle()", "invisible()", "hide()", "disappear()"]}
              correctAnswer="hideTurtle()"
              onAnswer={handleQuizAnswer}
            />
            
            <QuizQuestion
              question="Какой параметр в команде forward() определяет, как далеко продвинется черепашка?"
              options={["Расстояние в пикселях", "Угол в градусах", "Время в секундах", "Скорость"]}
              correctAnswer="Расстояние в пикселях"
              onAnswer={handleQuizAnswer}
            />
            
            <QuizQuestion
              question="Какая команда устанавливает цвет пера для черепашки?"
              options={["setColor()", "penColor()", "color()", "pencolor()"]}
              correctAnswer="pencolor()"
              onAnswer={handleQuizAnswer}
            />
            
            <QuizQuestion
              question="Какая команда задает цвет фона для окна рисования?"
              options={["background()", "setBackground()", "bgcolor()", "canvasColor()"]}
              correctAnswer="bgcolor()"
              onAnswer={handleQuizAnswer}
            />
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-10">Попробуйте написать код</h2>
            
            <CodeQuestion
              question="Напишите код, который рисует квадрат со стороной 50 пикселей:"
              correctAnswer="for i in range(0,4):
  forward(50)
  left(90)"
              hint="Используйте цикл, где i меняется от 0 до 3 включительно, и команды forward() и left()"
              onAnswer={handleCodeAnswer}
            />
            
            <CodeQuestion
              question="Напишите код для изменения цвета пера на красный:"
              correctAnswer="pencolor(\"Red\")"
              hint="Используйте команду pencolor() с названием цвета в кавычках"
              onAnswer={handleCodeAnswer}
            />
            
            <CodeQuestion
              question="Напишите команду для перемещения черепашки без рисования линии:"
              correctAnswer="penup()"
              hint="Есть специальная команда, которая 'поднимает перо'"
              onAnswer={handleCodeAnswer}
            />
            
            <CodeQuestion
              question="Напишите команду, которая повернет черепашку на 45 градусов влево:"
              correctAnswer="left(45)"
              hint="Используйте команду поворота с указанием градусов"
              onAnswer={handleCodeAnswer}
            />
            
            <CodeQuestion
              question="Напишите код для рисования треугольника с равными сторонами:"
              correctAnswer="for i in range(0,3):
  forward(100)
  left(120)"
              hint="Используйте цикл и поворот на 120 градусов"
              onAnswer={handleCodeAnswer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PyTurtle;
