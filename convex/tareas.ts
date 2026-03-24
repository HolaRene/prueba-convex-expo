import { v } from 'convex/values'
import { mutation, query } from './_generated/server'

export const obtenerTareas = query({
    handler: async (ctx) => {
        const tareas = await ctx.db.query("tareas").collect()
        return tareas
    }
})

export const crearTarea = mutation({
    args:{
        texto: v.string()
    },
    handler:async(ctx, args)=>{
        const nuevaTarea = await ctx.db.insert("tareas",{
            texto: args.texto,
            completada: false
        })
        return nuevaTarea
    }
})

export const manejoTarea = mutation({
    args:{
        id:v.id("tareas"),
    },
    handler:async(ctx, args)=>{
        const t = await ctx.db.get(args.id)
        if(!t) throw new Error("Tarea no encontrada")
        await ctx.db.patch(args.id,{
            completada: !t.completada
        })    
    }
})

export const eliminarTarea = mutation({
    args:{
        id:v.id("tareas"),
    },
    handler:async(ctx, args)=>{
        await ctx.db.delete(args.id)
    }
})

export const actualizarTarea = mutation({
    args:{
        id:v.id("tareas"),
        texto:v.string()
    },
    handler:async(ctx, args)=>{
        await ctx.db.patch(args.id,{
            texto: args.texto
        })
    }
})

export const eliminarTodasTareas = mutation({
    handler:async(ctx)=>{
        const tareas = await ctx.db.query("tareas").collect()
        for(const tarea of tareas){
            await ctx.db.delete(tarea._id)
        }
        return {
            mensaje: "Todas las tareas han sido eliminadas",
            deletedCount: tareas.length
        }
    }
})