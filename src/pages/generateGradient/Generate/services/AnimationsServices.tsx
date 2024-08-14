import { backgroundTransition } from "../../Animations/AnimeBackground";

export class AnimationService {
  static activeLinearBackgroundTransition(active: boolean, duration: number, infinite: boolean) {
    active === true ? backgroundTransition(duration, infinite) : null;
  };
}