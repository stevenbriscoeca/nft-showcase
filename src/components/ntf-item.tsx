export default function nftItem(props: any) {
  return (
    <div className=" bg-amber-400 rounded">
      <a href={props.url} className="font-bold underline text-white">
        {props.name}
        <img src={props.image} alt="" />
      </a>
    </div>
  );
}
