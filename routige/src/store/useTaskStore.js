import { create } from 'zustand';

export const useTaskStore = create(set => ({
  // Initial Tasks
  dailyTasks: [
        {
          id: 1,
          title: "Morning Walk",
          description: "10 minutes outside",
          diamonds: 1,
          xp: 1,
          gp: 10,
          completed: false
        },
        {
          id: 2,
          title: "Brush Teeth",
          description: "Make them shine!",
          diamonds: 1,
          gp: 5,
          xp: 1,
          completed: false
        }
      ],
  todoTasks: [
        {
          id: 3,
          title: "Physics Assignment",
          description: "Tasks 1-34",
          diamonds: 2,
          gp: 35,
          xp: 1,
          completed: false
        },
        {
          id: 4,
          title: "Mechanics Project",
          description: "Fix mistakes carefully",
          diamonds: 1,
          gp: 20,
          xp: 1,
          completed: false
        },
        {
          id: 5,
          title: "Get Gift for Ari",
          description: "It's worth it 💖",
          diamonds: 7,
          gp: 100,
          xp: 1,
          completed: false
        }
      ],

  // Action: Mark task as completed
  completeTask: (taskId, listType) => {
    set(state => {
      const updatedList = state[listType].map(task =>
        task.id === taskId ? { ...task, completed: true } : task
      );

      return { [listType]: updatedList };
    });
  },

  // Action: Add new task
  addTask: (task, listType) => {
    set(state => {
      const newTask = { ...task, id: Date.now() }; // Unique ID
      return { [listType]: [...state[listType], newTask] };
    });
  },

  // Action: Reset all tasks (for testing)
  resetAllTasks: () => {
    set({
      dailyTasks: [
        {
          id: 1,
          title: "Morning Walk",
          description: "10 minutes outside",
          diamonds: 1,
          xp: 1,
          gp: 10,
          completed: false
        },
        {
          id: 2,
          title: "Brush Teeth",
          description: "Make them shine!",
          diamonds: 1,
          gp: 5,
          xp: 1,
          completed: false
        }
      ],
      todoTasks: [
        {
          id: 3,
          title: "Physics Assignment",
          description: "Tasks 1-34",
          diamonds: 2,
          gp: 35,
          xp: 1,
          completed: false
        },
        {
          id: 4,
          title: "Mechanics Project",
          description: "Fix mistakes carefully",
          diamonds: 1,
          gp: 20,
          xp: 1,
          completed: false
        },
        {
          id: 5,
          title: "Get Gift for Ari",
          description: "It's worth it 💖",
          diamonds: 7,
          gp: 100,
          xp: 1,
          completed: false
        }
      ]
    });
  }
}));