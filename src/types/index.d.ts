type Props = {
  step: number;
};

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  activeId: number | null;
  onSelect: (id: number) => void;
};
type LeftActionsProps = {
  activeId: number | null;
  onSelect: (id: number) => void;
};
type RightActionsProps = {
  activeId: number | null;
  onSelect: (id: number) => void;
};
type CenterContentProps = {
  activeId: number | null;
};
type timelineHeroProps = {
  phase: "hero" | "warp";
};
type timelineProps = {
  onHome: () => void;
};
