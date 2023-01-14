import "./index.css";

let alph = "#abcdefghijklmnopqrstuvwxyz";

export default function Index() {
  return (
    <>
      <div className="abc-catagory">
        <span className="abc-items">
          {[...Array(alph.length)].map((val, i) => {
            return <button key={i}>{alph[i]}</button>;
          })}
        </span>
      </div>
    </>
  );
}
