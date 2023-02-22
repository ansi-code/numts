import * as cpu from "./cpu";
import * as wasm from "./wasm";

export default function(backend: "cpu" | "wasm") {
    switch (backend) {
        case "cpu":
            return cpu;
        case "wasm":
            return wasm;
    }
}

