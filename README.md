¿Qué sucedió al usar async y await?
Al usar async y await, el programa espera a que las promesas se resuelvan antes de continuar con la ejecución. Esto significa que las tareas asincrónicas, como la creación, eliminación y marcado de tareas, se realizan de forma secuencial y ordenada, lo que hace que el flujo de ejecución sea más predecible y legible.

¿Qué sucedió al usar el método then()?
Cuando se usan métodos then(), se ejecutan las tareas de forma asincrónica y no se espera a que una tarea se complete antes de comenzar la siguiente. Esto puede resultar en un flujo de ejecución menos predecible y más difícil de seguir. Además, es más difícil manejar errores de forma coherente.

¿Qué diferencias encontraste entre async, await y el método then()?
async y await ofrecen un flujo de ejecución más secuencial y legible, ya que esperan a que las promesas se resuelvan antes de continuar.
El método then() permite realizar tareas asincrónicas de forma más concurrente, lo que puede ser más difícil de controlar y depurar.
async y await simplifican la gestión de errores con try/catch, mientras que el método then() requiere la declaración de funciones de devolución de llamada para manejar errores de manera similar.