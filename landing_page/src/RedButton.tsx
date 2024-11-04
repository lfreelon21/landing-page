import './RedButton.css';

export default function RedButton({text}: {text?: string}) {
  return (
    <button type="submit" className="learn-more-button">{text ?? 'Learn More'}</button>
  );
}