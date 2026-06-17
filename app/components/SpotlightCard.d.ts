import type { ComponentType, ElementType, HTMLAttributes } from "react";

export interface SpotlightCardProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  spotlightColor?: string;
}

declare const SpotlightCard: ComponentType<SpotlightCardProps>;

export default SpotlightCard;
