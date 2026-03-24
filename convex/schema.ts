import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
    tareas: defineTable({
        texto: v.string(),
        completada: v.boolean(),
    })
})