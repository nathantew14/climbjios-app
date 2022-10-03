import { Gym } from './gym';
import { User } from './user';

// Jio represents a jio request
export interface Jio {
  id: number;
  isBuy: boolean;
  numPasses: number;
  price: number;
  gymId: number;
  date: string;
  startTiming: string;
  endTiming: string;
  openToClimbTogether: boolean;
  optionalNote: string;
  createdAt: string;
  updatedAt: string;
  isClosed: boolean;
  user: User;
  gym: Gym;
}
