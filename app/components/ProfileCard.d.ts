import type { ComponentType } from "react";

export interface ProfileCardProps {
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  avatarUrl?: string;
  miniAvatarUrl?: string;
  iconUrl?: string;
  grainUrl?: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  mobileTiltSensitivity?: number;
  behindGlowColor?: string;
  behindGlowSize?: string;
  behindGlowEnabled?: boolean;
  innerGradient?: string;
  className?: string;
  onContactClick?: () => void;
}

declare const ProfileCard: ComponentType<ProfileCardProps>;

export default ProfileCard;
