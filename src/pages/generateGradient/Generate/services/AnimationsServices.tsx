import { backgroundTransition } from "../../Animations/AnimeBackground";

export class AnimationService {
  static activeLinearBackgroundTransition(active: boolean, duration: number, infinite: boolean, direction: string) {
    active === true ? backgroundTransition(duration, infinite, direction) : null;
  };
}