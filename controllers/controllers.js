// Simula una base de datos en memoria
const tareas = [];

// Obtener todas las tareas
export const getTareas = (req, res) => {
  res.status(200).send(tareas);
};

// postear una nueva tarea
export const addTarea = (req, res) => {
  const newTask = {
    id: tareas.length + 1,
    nombre: req.body.nombre
  };
  tareas.push(newTask);
  res.status(201).json(newTask);
};



//  Actualizar el estado de una tarea 
export const updateTarea = (req, res) => {
  const id = parseInt(req.params.id); 
  const { nombre, completed } = req.body; 

  const tareaIndex = tareas.findIndex(t => t.id === id); 

  if (tareaIndex !== -1) {
    
    if (nombre !== undefined) {
      tareas[tareaIndex].nombre = nombre;
    }
    if (completed !== undefined) {
      tareas[tareaIndex].completed = completed;
    }
    res.status(200).json(tareas[tareaIndex]); 
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
};

// Eliminar una tarea por ID

export const deleteTarea = (req, res) => {
  const id = parseInt(req.params.id);
  const index = tareas.findIndex(t => t.id === id);

  if (index !== -1) {
    tareas.splice(index, 1);
    res.status(200).json({ size: tareas.length });
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
};

//  Obtener estadísticas de tareas 
export const getSummary = (req, res) => {
  const totalTasks = tareas.length;
  const completedTasks = tareas.filter(t => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  res.status(200).json({
    totalTasks,
    completedTasks,
    pendingTasks
  });
};
 

