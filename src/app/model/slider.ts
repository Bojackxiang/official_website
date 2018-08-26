import { Slide } from './slide';

export class Slider {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  clickUrl: string;
  slides: Slide[];
  enabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}