import { TopicCard } from "@/components/TopicCard";
import { PythonCompiler } from "@/components/PythonCompiler";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";

const Topics = () => {
  const [activeSection, setActiveSection] = useState('topics');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <NavigationMenu className="mb-8">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className="bg-primary text-white hover:bg-primary/90"
              >
                Изучение Python
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px] animate-fade-in">
                  <NavigationMenuLink 
                    className="cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    onClick={() => setActiveSection('topics')}
                  >
                    <div className="text-sm font-medium leading-none">Темы</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Изучайте основы Python с интерактивными уроками
                    </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink 
                    className="cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    onClick={() => setActiveSection('compiler')}
                  >
                    <div className="text-sm font-medium leading-none">Компилятор</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Практикуйтесь в написании кода Python
                    </p>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="animate-fade-up">
          {activeSection === 'topics' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TopicCard
                title="Переменные"
                description="Изучите основы работы с переменными в Python"
                path="/variables"
              />
              <TopicCard
                title="Строки"
                description="Узнайте как работать со строками в Python"
                path="/strings"
              />
              {/* Add more TopicCards as needed */}
            </div>
          ) : (
            <PythonCompiler />
          )}
        </div>
      </div>
    </div>
  );
};

export default Topics;