---
title: EgoPose
sidebar_position: 3
---

# EgoPose Annotations
The ground truth of EgoPose is annotated at the timestamp level for each take. At each timestamp with valid annotations, a single set of global 3D keypoints are provided, along with the corresponding 2D keypoints on ego and exo cameras. 
The camera metadata for each take including intrinsic and extrinsic matries are also provided in a seperate .json file. We will describle the details below.


## 2D/3D Keypoints JSON Structure 

For each take, the 2D and 3D keypoints are grouped by the frame number. One can use `frame_number` as index to query annotations.    

Example Usage

```python
import json

# Specify the path to your JSON file
json_file_path = 'path/to/<take_uid>.json'

# Open and read the JSON file
with open(json_file_path, 'r') as file:
    # Load the JSON data
    json_data = json.load(file)

# Example Python code to access 2D annotations for 'cam01' and 'cam02'
cam01_annotations = json_data['1175'][0]['annotation2D']['cam01']
cam02_annotations = json_data['1175'][0]['annotation2D']['cam02']

# Example usage of 3D annotations for 'right_middle_2' joint
right_middle_2_3d = json_data['1175'][0]['annotation3D']['right_middle_2']
```

### JSON Structure
Here is a typical structure for EgoPose

  Example:

  ```json
  {
    "<frame_number>": [{
        "metadata": {
            "take_uid": (string),
            "take_name": (string),
            "frame_number": (int)
        },
        "annotation2D": {
            "cam01":{
                "<joint_name>": {
                    "x": (float),
                    "y": (float),
                    "placement": (string)
                },
                ...
            },
            "cam02":{
                "<joint_name>": {
                    "x": (float),
                    "y": (float),
                    "placement": (string)
                },
                ...
            },
            "cam03":{
                "<joint_name>": {
                    "x": (float),
                    "y": (float),
                    "placement": (string)
                },
                ...
            },
            "cam04":{
                "<joint_name>": {
                    "x": (float),
                    "y": (float),
                    "placement": (string)
                },
                ...
            },
            "aria":{
                "<joint_name>": {
                    "x": (float),
                    "y": (float),
                    "placement": (string)
                },
                ...
            },
        },
        "annotation3D": {
            "<joint_name>": {
                "x": (float),
                "y": (float),
                "z": (float),
                "num_views_for_3d": (int)
            },
            "<joint_name>": {
                "x": (float),
                "y": (float),
                "z": (float),
                "num_views_for_3d":  (int)
            },
            ...
        }
    }],
    ...
  }
  ```

### Metadata

- **`take_uid`** (String): Unique identifier for the take.
- **`take_name`** (String): Name of the take.
- **`frame_number`** (Integer): Frame number associated with the data.

### 2D Annotations

- **`annotation2D`** (Object): Contains 2D annotations from different cameras and perspectives.

  - **`cam01` to `cam04`** (Object): Annotations from individual cameras. For hand, an additional `aria` camera is provided.

    - **`joint_name`** (Object): Coordinates and placement information for specific joints.

      - **`x`** (Float): X-coordinate.
      - **`y`** (Float): Y-coordinate.
      - **`placement`** (String): Indicates whether the annotation is manual or auto-generated.


### 3D Annotations

- **`annotation3D`** (Object): Contains 3D annotations for specific joints.

  - **`joint_name`** (Object): Coordinates in 3D space and the number of views used for 3D annotation.

      - **`x`** (Float): Coordinates in 3D space.
      - **`y`** (Float): Coordinates in 3D space.
      - **`z`** (Float): Coordinates in 3D space.
      - **`num_views_for_3d`** (Integer): Number of views considered for 3D annotation.
   
### Joint Names
In EgoPose, body and hand are annotated separately. Please refer to seperate json for body and hand individually. The group of joint names adopted in body and hand annotations are:
-  `joint_name` for Body (17 in total):

  `left-shoulder`, `right-shoulder`, `left-knee`, `right-knee`, `left-elbow`, `right-elbow`, `left-eye`, `right-eye`, `left-wrist`, `right-wrist`, `left-ankle`, `right-ankle`, `left-hip`, `right-hip`, `left-ear`, `right-ear`, `nose`

![Screenshot 2023-12-08 at 3 58 18 PM](https://github.com/fairinternal/Ego-Exo4D-Docs/assets/12767306/1de75df6-2eff-4495-b087-2b2c70cb5a42)

-  `joint_name` for Hand (42 in total, 21 for left hand, 21 for right hand):
  
`left_pinky_1`, `left_pinky_2`, `left_pinky_3`, `left_pinky_4`, `left_ring_1`, `left_ring_2`, `left_ring_3`, `left_ring_4`, `left_middle_1`, `left_middle_2`, `left_middle_3`, `left_middle_4`, `left_index_1`, `left_index_2`, `left_index_3`, `left_index_4`, `left_thumb_1`, `left_thumb_2`, `left_thumb_3`, `left_thumb_4`, `left_wrist`, `right_pinky_1`, `right_pinky_2`, `right_pinky_3`, `right_pinky_4`, `right_ring_1`, `right_ring_2`, `right_ring_3`, `right_ring_4`, `right_middle_1`, `right_middle_2`, `right_middle_3`, `right_middle_4`, `right_index_1`, `right_index_2`, `right_index_3`, `right_index_4`, `right_thumb_1`, `right_thumb_2`, `right_thumb_3`, `right_thumb_4`, `right_wrist`

![Screenshot 2023-12-08 at 3 57 54 PM](https://github.com/fairinternal/Ego-Exo4D-Docs/assets/12767306/f3b2612f-3c1e-4fa2-b91b-0b8d31d606f4)



