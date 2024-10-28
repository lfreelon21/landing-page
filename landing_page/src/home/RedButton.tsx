import './RedButton.css';

export default function RedButton({text}: {text?: string}) {
  return (
    <button className="learn-more-button">{text ?? 'Learn More'}</button>
  );
}