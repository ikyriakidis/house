// One entry per design version, newest first. Each version lives in its own folder (v1/, v2/, ...)
// The root plan.html / 3d.html / electrical.html hold v7, the last version with an electrical drawing.
window.HOUSE_VERSIONS = [
  {
    id: "v11",
    date: "2026-11-01",
    title: "One shared bathroom, shorter bedroom wing",
    hasCost: true,
    changes: [
      "One shared bathroom by the foyer, for the children and for guests, instead of the guest WC and the children's shower room.",
      "En-suite and walk-in closet move into the old shower room's place, so the west strip of the bedroom wing is 2 m shorter; the master bedroom keeps its size and gains a west window.",
      "Heated area about 172 m² (v10: 179 m²)."
    ]
  },
  {
    id: "v10",
    date: "2026-11-01",
    title: "Gas fireplace and hob on LPG cylinders",
    hasCost: true,
    changes: [
      "Gas fireplace: sealed, balanced-flue unit venting straight out through the east wall, no chimney through the roof.",
      "Gas hob in the kitchen run on the same wall.",
      "Two 25 kg LPG cylinders with an automatic changeover in a ventilated cabinet in the east side passage, between the kitchen window and the fireplace; about 1.5 m of pipe to each appliance.",
      "Rooms, outline and areas as in v9."
    ]
  },
  {
    id: "v9",
    date: "2026-11-01",
    title: "Open kitchen and living, children's rooms together",
    hasCost: true,
    changes: [
      "No pantry: the laundry is the way in from the garage, and the pantry's corner becomes a store at the back of the garage.",
      "Smaller foyer (2.6 × 2.4 m); the guest WC moves up next to it.",
      "Both children's bedrooms side by side on the west, next to their shower room; the playroom moves to the courtyard side with a sliding door into the living room.",
      "Kitchen, dining and living as one open room; fireplace and TV side by side on the east wall, an L-shaped sofa facing them with the pool on the left.",
      "Same outline as v8. Heated area about 179 m²."
    ]
  },
  {
    id: "v8",
    date: "2026-11-01",
    title: "The Plot 2 v5 house on Plot 1",
    hasCost: true,
    changes: [
      "The Plot 2 v5 layout (compact foyer, playroom, two bedrooms and the master suite, living room facing the pool) placed on this plot, narrowed from 15.3 to 13 m to fit between the 3 m side setbacks.",
      "The garage opens south onto the street, with an 8 m driveway beside the front path; the tech room becomes a tech wall in the 7 m garage.",
      "Living room 7 m wide, dining 3.3 m and kitchen 3.7 m behind it; pool 3 × 8 m in a courtyard that runs to a 2.2 m wall on the east boundary.",
      "Heated area about 182 m². No electrical drawing yet."
    ]
  },
  {
    id: "v7",
    date: "2026-10-30",
    title: "Χελώνα, composite structure",
    hasElectrical: true,
    changes: [
      "Χελώνα (utility connection box) in the front wall: the ΔΕΔΔΗΕ electricity meter and the fibre-internet termination arrive together; power runs to the main panel and fibre to the rack.",
      "Structure layer for the composite construction (σύμμικτη κατασκευή): RC footings, slab and columns, steel beams, a composite steel-deck roof slab, steel lintels over the big openings, steel pergola and clerestory frames.",
      "Outdoor wall lights renamed to wall lights (απλίκες) on the plan and electrical drawing.",
      "Also in every version: architectural drawing style for the plans, solar batteries always shown, and a pool plant-room view in 3D (v5 onwards)."
    ]
  },
  {
    id: "v6",
    date: "2026-10-30",
    title: "Pool beside the terrace, bioclimatic pergola",
    hasElectrical: true,
    changes: [
      "Pool moved right up to the terrace: 3.3 m from the living-room glass instead of 7 m, with its overflow gutter meeting the terrace paving.",
      "Bioclimatic pergola 13 × 5 m with tilting louvres over the whole terrace and the first 2 m of the pool; four posts stand outside the pool.",
      "Sun shelf: a 30 cm-deep ledge across the near end of the pool, under the pergola.",
      "Balance tank moved beside the pool's west end; rainwater tank moved under the east deck; loungers on the east deck.",
      "Electrical drawing: new circuit Ι16 for the pergola (louvre motor, LED strips, rain/wind sensor) and the pool lights moved to the new south wall."
    ]
  },
  {
    id: "v5",
    date: "2026-10-30",
    title: "Overflow pool, plant room, drainage, electrical drawing",
    hasElectrical: true,
    changes: [
      "Overflow pool: water level with the deck, grated gutter all round, underground balance tank.",
      "Pool plant room (μηχανοστάσιο) added to the west end of the pool house: pump, sand filter, salt chlorinator, pool sub-panel; floor about 1 m below the deck.",
      "Drainage channels: perimeter foundation drain round the house and slot drains at the terrace edge, front door and pool house, all to the rainwater tank or soakaways.",
      "New electrical drawing (Ηλεκτρολογικό σχέδιο): standard symbols, numbered circuits, legend, and a circuit schedule for the main panel and the pool sub-panel.",
      "Outdoor shower moved to the east end of the pool deck."
    ]
  },
  {
    id: "v4",
    date: "2026-10-30",
    title: "Wider garage, flood protection, service layers",
    changes: [
      "Garage widened from 6.0 to 6.5 m with a 5.5 m door, sized for the BMW X7 and BMW 1 Series side by side (about 0.9 m on each side and between them).",
      "The entry hall narrows from 1.5 to 1.2 m and the shower-room/pantry column from 2.1 to 1.9 m; the kitchen gains 0.3 m.",
      "Flood protection: garage floor 15 cm above the driveway, slot drains at the garage door and the gate, driveway falling to the street, slots for a removable flood barrier.",
      "New switchable layers on the plan: water, drainage (sewer and rainwater), electrical (with outdoor wall lights) and network; a Services view in 3D.",
      "Heated area about 200 m²."
    ]
  },
  {
    id: "v3",
    date: "2026-10-30",
    title: "Garage door into the pantry",
    changes: [
      "New door from the back of the garage (by the storage bay) straight into the pantry, for unloading shopping: about 3 m from the boot to the shelves.",
      "People still all arrive through the foyer, from the front door or the garage.",
      "The pantry no longer opens off the entry hall, which frees its west wall for shelves.",
      "Heated area unchanged at about 204 m²."
    ]
  },
  {
    id: "v2",
    date: "2026-10-30",
    title: "Shared entrance",
    changes: [
      "Front door and garage door both open into the foyer: one place to arrive, leave shoes and coats.",
      "Mudroom removed; its space became a storage bay at the back of the garage.",
      "Nobody enters through the kitchen any more. The pantry now opens off the entry hall, and the laundry off the kitchen.",
      "Heated area down to about 204 m²."
    ]
  },
  {
    id: "v1",
    date: "2026-10-30",
    title: "Mudroom between garage and kitchen",
    changes: [
      "Single storey, 13 m wide, street on the south, pool 7 m into the north garden.",
      "Garage → mudroom → pantry → kitchen; front door into a separate foyer.",
      "No dining room: reading corner in the living room, 4-seat kitchen island.",
      "Pool house with pool WC, BBQ store and covered BBQ kitchen.",
      "Heated area about 209 m²."
    ]
  }
];
