function InfoBlock(props: any) {
  return (
    <div>
      <div>
        <span>Some random number on counter 1 change:</span> {1000 * Math.random()}, counter
        1 value: {props.count1}
      </div>
    </div>
  );
}

export default InfoBlock;
