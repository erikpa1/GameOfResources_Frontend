import React from 'react'
import {Splitter} from "antd"
import NNHierarchy from "@TurtleApp/Routes/NN/NNHierarchy"

export default function NNDock() {
    return (
        <Splitter style={{
            height: "100vh"
        }}>
            <Splitter.Panel
                defaultSize={"20%"}
                style={{
                    backgroundColor: "white",
                    padding: "15px"
                }}
            >
                <NNHierarchy/>
            </Splitter.Panel>

            <Splitter.Panel>

            </Splitter.Panel>

        </Splitter>
    )
}