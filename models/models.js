export default app;
import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../app.js";

describe("API de tareas", () => {
  it("GET /tarea", async () => {
    const newTarea = {nombre:"tarea 1"}
    await request(app).post("/tarea").send(newTarea);
    
    const resp = await request(app).get("/tarea");
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual([
      {
        id: 1,
        nombre: "tarea 1",
      },
    ]);
  });

  it("POST /tarea", async () => {
    const nuevaTarea = { nombre: "Reinstalar software" };
    const res = await request(app)
    .post("/tarea")
    .send(nuevaTarea);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  }); 

  it("PUT Actualizar estado de una tarea", async () => {
    const idTarea = 1;
    const res = await request(app)
      .put(`/tasks/${idTarea}`) 
      .send({ completed: true }); 

    expect(res.statusCode).toBe(200); 
    expect(res.body.completed).toBe(true); 
    expect(res.body.nombre).toBe('Aprender Node.js'); 
  });

   
  it("/DELETE Eliminar tarea",async ()=>{
    const idTarea = 1;
    const res = await request(app).delete(`/tarea/${idTarea}`)
    expect(res.statusCode).toBe(200);
    expect(res.body.size).toBe(1);
  })
}); 


  it("GET Obtener estadísticas de tareas", async () => {
    const res = await request(app)
      .get("/tasks/summary"); 

    expect(res.statusCode).toBe(200); 
    expect(res.body.totalTasks).toBe(3); 
    expect(res.body.completedTasks).toBe(1); 
    expect(res.body.pendingTasks).toBe(2); 
  });

  
