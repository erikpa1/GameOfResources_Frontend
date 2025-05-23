import React from "react"
import Entity from "@Turtle/Data/Entity";
import {Sphere} from "@react-three/drei";
import CylinderBetweenPoints from "@Turtle/Fibers/CylinderBetween";


interface ConnectionFiberProps {
    a: Entity
    b: Entity
}


export default function ConnectionFiber({
                                            a,
                                            b
                                        }: ConnectionFiberProps) {


    return (
        <CylinderBetweenPoints
            start={a.position as any}
            end={b.position as any}
        />
    )
}