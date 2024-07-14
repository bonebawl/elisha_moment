export default function Switch({ isOn, onChange }) {
    return (
      <label className="switch absolute top-4 right-4">
        <input type="checkbox" checked={isOn} onChange={onChange} />
        <span className="slider round"></span>
      </label>
    );
  }