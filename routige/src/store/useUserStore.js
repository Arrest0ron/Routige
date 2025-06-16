import { create } from 'zustand';

export const useUserStore = create(set => ({
  xp: 0,
  gp: 500,
  hp: 70,
  level: 1,
  diamonds: 10,


  addXP: (amount) => set(state => ({ xp: state.xp + amount })),
  addGP: (amount) => set(state => ({ gp: state.gp + amount })),
  addDiamonds: (amount) => set(state => ({ diamonds: state.diamonds + amount })),
  
  spendGP: (amount) => set(state => ({ gp: state.gp - amount })),
  
}));