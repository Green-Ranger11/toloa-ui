import { useRef, useCallback } from "react";
import { nodes, links } from "../data/data";
import { ForceGraph3D } from "react-force-graph";
import { TextureLoader, SpriteMaterial, Sprite } from "three";
import SpriteText from "three-spritetext";

function FocusGraph() {
  const fgRef = useRef();

  const handleClick = useCallback(
    (node) => {
      // Aim at node from outside it
      const distance = 40;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

      fgRef.current.cameraPosition(
        {
          x: node.x * distRatio,
          y: node.y * distRatio,
          z: node.z * distRatio,
        }, // new position
        node, // lookAt ({ x, y, z })
        3000 // ms transition duration
      );
    },
    [fgRef]
  );

  return (
    <ForceGraph3D
      graphData={{ nodes, links }}
      nodeThreeObject={(node) => {
        if (node.img) {
          const imgTexture = new TextureLoader().load(
            new URL(`../images/${node.img}`, import.meta.url).href
          );
          const material = new SpriteMaterial({ map: imgTexture });
          const sprite = new Sprite(material);
          sprite.scale.set(12, 12);

          return sprite;
        }
      }}
      ref={fgRef}
      onNodeClick={handleClick}
      onNodeDragEnd={(node) => {
        node.fx = node.x;
        node.fy = node.y;
        node.fz = node.z;
      }}
      linkWidth={0.2}
      nodeColor={(d) => d.color}
      linkThreeObjectExtend={true}
      linkThreeObject={(link) => {
        // extend link with text sprite
        const sprite = new SpriteText(
          `${link.source.name} > ${link.target.name}`
        );
        sprite.color = "lightgrey";
        sprite.textHeight = 1.5;
        return sprite;
      }}
      linkPositionUpdate={(sprite, { start, end }) => {
        const middlePos = Object.assign(
          ...["x", "y", "z"].map((c) => ({
            [c]: start[c] + (end[c] - start[c]) / 2, // calc middle point
          }))
        );

        // Position sprite
        Object.assign(sprite.position, middlePos);
      }}
    />
  );
};

export default FocusGraph;