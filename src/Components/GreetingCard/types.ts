export interface IGreetingCardItem {
  firstName: string;
  lastName: string;
  post: string;
  image: string;
  expanded: boolean;
  handleClick: () => void;
}
