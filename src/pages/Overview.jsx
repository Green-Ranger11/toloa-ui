import React from "react";
import useEffect from "react";
import { nodes, links } from "../dataset/data";
import { ForceGraph3D } from "react-force-graph";
import { TextureLoader, SpriteMaterial, Sprite } from "three";
import spc from "../images/spc.png";

function Overview() {
  return (
    <>
      <ForceGraph3D
        graphData={{ nodes, links }}
        nodeThreeObject={(node) => {
          const imgTexture = new TextureLoader().load(node.img ? new URL(`../images/${node.img}`, import.meta.url).href : spc);
          const material = new SpriteMaterial({ map: imgTexture });
          const sprite = new Sprite(material);
          sprite.scale.set(12, 12);

          return sprite;
        }}
      />
    </>
  );
}

export default Overview;
