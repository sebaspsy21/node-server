const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = [];

function printTasks() {
  console.log('Lista de Tareas:');
  tasks.forEach((task, index) => {
    const status = task.completed ? 'Completada' : 'Pendiente';
    console.log(`${index + 1}. [${status}] ${task.description}`);
  });
}

function addTask(description) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      tasks.push({ description, completed: false });
      resolve();
    }, 1000);
  });
}

function deleteTask(index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        resolve();
      } else {
        reject('Índice de tarea no válido.');
      }
    }, 1000);
  });
}

function completeTask(index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        resolve();
      } else {
        reject('Índice de tarea no válido.');
      }
    }, 1000);
  });
}

async function main() {
  const action = await ask('¿Qué acción deseas realizar? (add/delete/complete/exit): ');

  if (action === 'exit') {
    console.log('Adiós.');
    rl.close();
  } else if (action === 'add') {
    const description = await ask('Escribe la descripción de la tarea: ');
    try {
      await addTask(description);
      printTasks();
    } catch (error) {
      console.log(error);
    } finally {
      rl.close();
    }
  } else if (action === 'delete') {
    printTasks();
    const index = await ask('Escribe el número de la tarea que deseas eliminar: ');
    try {
      await deleteTask(index - 1); // Restamos 1 para ajustar al índice del array
      printTasks();
    } catch (error) {
      console.log(error);
    } finally {
      rl.close();
    }
  } else if (action === 'complete') {
    printTasks();
    const index = await ask('Escribe el número de la tarea que deseas marcar como completada: ');
    try {
      await completeTask(index - 1); // Restamos 1 para ajustar al índice del array
      printTasks();
    } catch (error) {
      console.log(error);
    } finally {
      rl.close();
    }
  } else {
    console.log('Acción no válida. Por favor, elige una acción válida.');
    rl.close();
  }
}

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

console.log('Bienvenido a la Lista de Tareas.');
main();