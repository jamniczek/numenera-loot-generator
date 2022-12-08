import { CypherTemplate } from "./types";

export const cypherTemplates: CypherTemplate[] = [
  {
    name: "Adhesion clamps",
    levelOffset: 0,
    availableTypes: [
      { type: "wearable", form: "Gloves" },
      { type: "usable", form: "Handles with powerful suction cups" },
    ],

    effect: `Allows for automatic climbing of any surface, even horizontal ones. Lasts for ten minutes per cypher level.`,
  },
  {
    name: "Antivenom",
    levelOffset: 2,
    availableTypes: [
      { type: "usable", form: "Injector" },
      { type: "internal", form: "Pill, ingestible liquid" },
    ],
    effect: `Renders user immune to poisons of the same level or lower for one hour per cypher level and ends any such ongoing effects, if any, already in the user’s system.`,
  },
  {
    name: "Attractor",
    levelOffset: 4,
    availableTypes: [
      { type: "wearable", form: "Glove of synth" },
      { type: "usable", form: "Small handheld device" },
    ],
    effect: `One unanchored item your size or smaller within long range (very long range if the cypher is level 8 or higher) is drawn immediately to the device. This takes one round. The item has no momentum when it arrives`,
  },
  {
    name: "Banishing nodule",
    levelOffset: 0,
    availableTypes: [{ type: "usable", form: "Crystal nodule affixed to a melee weapon" }],
    effect: `For the next 28 hours, each time the weapon the nodule is attached to strikes a solid creature or object, it generates a burst of energy that teleports the creature or object struck an immediate distance in a random direction (not up or down). The teleported creature’s actions (including defense) are hindered on its next turn (hindered by two steps if the cypher is level 5 or higher).`,
  },
  {
    name: "Blinking nodule",
    levelOffset: 0,
    availableTypes: [{ type: "usable", form: "Crystal nodule affixed to armor" }],
    effect: `For the next 28 hours, each time (but not more than once per round) the wearer of the armor the nodule is attached to is struck hard enough to inflict damage, they teleport an immediate distance in a random direction (not up or down). Since the wearer is prepared for this effect and their foe is not, the wearer’s defenses are eased for one round after they teleport (eased by two steps if the cypher is level 5 or higher).`,
  },
  {
    name: "Catholicon",
    levelOffset: 2,
    availableTypes: [
      { type: "usable", form: "Injector" },
      { type: "internal", form: "Pill, ingestible liquid" },
    ],
    effect: `Cures any disease of the cypher level or lower`,
  },
  {
    name: "Catseye",
    levelOffset: 0,
    availableTypes: [
      { type: "usable", form: "Injector" },
      { type: "internal", form: "Pill, ingestible liquid" },
    ],

    effect: `Grants the ability to see in the dark for five hours per cypher level`,
  },
  {
    name: "Chemical factory",
    levelOffset: 0,
    availableTypes: [
      { type: "usable", form: "Injector" },
      { type: "internal", form: "Pill, ingestible liquid" },
    ],
    effect: null,
  },
  {
    name: "Comprehension graft",
    levelOffset: 1,
    availableTypes: [{ type: "usable", form: "Small metallic disk" }],
    effect: `When applied to a creature’s head, the disk immediately unleashes microfilaments that enter the brain. Within five minutes, the creature can understand the words of a specific language keyed to the graft (two languages if the cypher is level 5 or higher). This is true even of creatures that do not normally have a language. If the creature could already understand the language, the cypher has no effect. Once the graft attaches, the effect is permanent, and this device no longer counts against the number of cyphers that a PC can bear.`,
  },
  {
    name: "Controlled blinking nodule",
    levelOffset: 2,
    availableTypes: [{ type: "usable", form: "Crystal nodule affixed to armor" }],
    effect: ` For the next 28 hours, each time the wearer of the armor the nodule is attached to is struck hard enough to inflict damage (but no more than once per round), they teleport to a spot they desire within immediate range. Since the wearer is prepared for this effect and their foe is not, the wearer’s defenses are eased for one round after they teleport (eased by two steps if the cypher is level 6 or higher)`,
  },
  {
    name: "Datasphere siphon",
    levelOffset: 0,
    availableTypes: [
      { type: "internal", form: "Pill, ingestible liquid" },
      {
        type: "wearable",
        form: "Temporary tattoo, amulet, headband, crystal worn on temple",
      },
      { type: "usable", form: "Small handheld device, crystal" },
    ],
    effect: `Tapping into the datasphere’s knowledge, the user can learn the answer to one question (two questions if the cypher is level 4 or higher, three questions if the cypher is level 6 or higher).`,
  },
  {
    name: "Density nodule",
    levelOffset: 0,
    availableTypes: [
      { type: "internal", form: "Pill, ingestible liquid" },
      {
        type: "wearable",
        form: "Temporary tattoo, amulet, headband, crystal worn on temple",
      },
      { type: "usable", form: "Crystal nodule affixed to a melee weapon" },
    ],
    effect: `For the next 28 hours, each time the weapon the nodule is attached to strikes a solid creature or object, the weapon suddenly increases dramatically in weight, causing the blow to inflict an additional 2 points of damage (3 points if the cypher is level 4 or higher).`,
  },
  {
    name: "Detonation",
    levelOffset: 2,
    availableTypes: [
      { type: "wearable", form: "Wristband projector (long range)" },
      {
        type: "usable",
        form: "Explosive device (thrown, short range)\n or handheld projector (long range)",
      },
    ],
    effect: null,
  },
  {
    name: "Detonation (desiccating)",
    levelOffset: 2,
    availableTypes: [
      { type: "wearable", form: "Wristband projector (long range)" },
      {
        type: "usable",
        form: "Explosive device (thrown, short range)\n or handheld projector (long range)",
      },
    ],
    effect: `Bursts in an immediate radius, draining moisture from everything within it. Living creatures take damage equal to the cypher level. Water in the area is vaporized.`,
  },
  {
    name: "Detonation (flash)",
    levelOffset: 2,
    availableTypes: [
      { type: "wearable", form: "Wristband projector (long range)" },
      {
        type: "usable",
        form: "Explosive device (thrown, short range)\n or handheld projector (long range)",
      },
    ],
    effect: `Bursts in an immediate radius, blinding all within it for one minute (ten minutes if the cypher is level 4 or higher).`,
  },
  {
    name: "Detonation (gravity)",
    levelOffset: 2,
    availableTypes: [
      { type: "wearable", form: "Wristband projector (long range)" },
      {
        type: "usable",
        form: "Explosive device (thrown, short range)\n or handheld projector (long range)",
      },
    ],
    effect: `Bursts in an immediate radius, inflicting damage equal to the cypher level by increasing gravity tremendously for one second. All in the area are crushed to the ground for one round and cannot take physical actions.`,
  },
  {
    name: "Detonation (massive)",
    levelOffset: 2,
    availableTypes: [
      { type: "wearable", form: "Wristband projector (very long range)" },
      { type: "usable", form: "Handheld projector (very long range)" },
    ],

    effect: null,
  },
  {
    name: "Detonation (matter disruption)",
    levelOffset: 4,
    availableTypes: [
      { type: "wearable", form: "Wristband projector (long range)" },
      {
        type: "usable",
        form: "Explosive device or ceramic sphere (thrown, short range)\n or handheld projector (long range)",
      },
    ],
    effect: `Explodes in an immediate radius, releasing nanites that rearrange matter in random ways. Inflicts damage equal to the cypher level.`,
  },
  {
    name: "Detonation (pressure)",
    levelOffset: 2,
    availableTypes: [
      { type: "wearable", form: "Wristband projector (long range)" },
      {
        type: "usable",
        form: "Explosive device or ceramic sphere (thrown, short range)\n or handheld projector (long range)",
      },
    ],
    effect: `Explodes in an immediate radius, inflicting impact damage equal to the cypher level. Also moves unattended objects out of the area if they weigh less than 20 pounds (9 kg) per cypher level.`,
  },
  {
    name: "Detonation (singularity)",
    levelOffset: 10,
    availableTypes: [
      { type: "wearable", form: "Wristband projector (long range)" },
      {
        type: "usable",
        form: "Explosive device or ceramic sphere (thrown, short range) or handheld projector (long range)",
      },
    ],
    effect: `Explodes and creates a momentary singularity that tears at the fabric of the universe. Inflicts 20 points of damage to all within short range, drawing them (or their remains) together to immediate range (if possible). Player characters in the radius move one step down the damage track if they fail a Might defense roll`,
  },
  {
    name: "Detonation (sonic)",
    levelOffset: 2,
    availableTypes: [
      { type: "wearable", form: "Wristband projector (long range)" },
      {
        type: "usable",
        form: "Explosive device or ceramic sphere (thrown, short range)\n or handheld projector (long range)",
      },
    ],
    effect: `Explodes with terrifying sound, deafening all in an immediate radius for ten minutes per cypher level.`,
  },
  {
    name: "Detonation (spawn)",
    levelOffset: 2,
    availableTypes: [
      { type: "wearable", form: "Wristband projector (long range)" },
      {
        type: "usable",
        form: "Explosive device or ceramic sphere (thrown, short range) or handheld projector (long range)",
      },
    ],
    effect: null,
  },
  {
    name: "Detonation (web)",
    levelOffset: 2,
    availableTypes: [
      { type: "wearable", form: "Wristband projector (long range)" },
      {
        type: "usable",
        form: "Explosive device or ceramic sphere (thrown, short range) or handheld projector (long range)",
      },
    ],
    effect: ` Explodes in an immediate radius and creates sticky strands of goo that last 1 hour. PCs caught in the area must use a Might-based action to get out, with the difficulty determined by the cypher level. NPCs break free if their level is higher than the cypher level`,
  },
  {
    name: "Disrupting nodule",
    levelOffset: 0,
    availableTypes: [{ type: "usable", form: "Crystal nodule affixed to a melee weapon" }],
    effect: `For the next 28 hours, each time the weapon the nodule is attached to strikes a solid creature or object, it generates a burst of nanites that directly attack organic cells. The affected target takes 1 additional point of damage (2 points if the cypher is level 4 or higher, 3 points if the cypher is level 6 or higher) and loses its next action.`,
  },
  {
    name: "Eagleseye",
    levelOffset: 0,
    availableTypes: [
      { type: "internal", form: "Pill, ingestible liquid" },
      { type: "usable", form: "Injector" },
    ],
    effect: `Grants the ability to see ten times as faras normal for one hour per cypher level.`,
  },
  {
    name: "Fireproofing spray",
    levelOffset: 4,
    availableTypes: [{ type: "usable", form: "Spray canister" }],
    effect: `An object sprayed by this cypher has Armor against fire damage equal to the cypher’s level for 28 hours. `,
  },
  {
    name: "Flame-retardant wall",
    levelOffset: 0,
    availableTypes: [
      { type: "wearable", form: "Belt, ring, bracelet" },
      { type: "usable", form: "Handheld device" },
    ],
    effect: `Creates an immobile plane of permeable energy up to 20 feet by 20 feet (6 m by 6 m) for one hour per cypher level. The plane conforms to the space available. Flames passing through the plane are extinguished.`,
  },
  {
    name: "Force cube projector",
    levelOffset: 3,
    availableTypes: [
      { type: "wearable", form: "Belt, ring, bracelet" },
      { type: "usable", form: "Handheld device" },
    ],
    effect: ` Creates an immobile cube composed of six planes of solid force, each 30 feet (9 m) to a side, for one hour. The planes conform to the space available.`,
  },
  {
    name: "Force nodule",
    levelOffset: 0,
    availableTypes: [{ type: "usable", form: "Crystal nodule affixed to armor" }],
    effect: `For the next 28 hours, the armor the nodule is attached to is bolstered by a powerful force field, adding 2 to the Armor it provides (adding 3 to the Armor if the cypher is level 5 or higher).`,
  },
  {
    name: "Force screen projector",
    levelOffset: 3,
    availableTypes: [
      { type: "wearable", form: "Belt, ring, bracelet" },
      { type: "usable", form: "Handheld device" },
    ],
    effect: `Creates an immobile plane of solid force up to 20 feet by 20 feet (6 m by 6 m) for one hour per cypher level. The plane conforms to the space available.`,
  },
  {
    name: "Force shield projector",
    levelOffset: 3,
    availableTypes: [
      { type: "internal", form: "Subdermal injection" },
      { type: "wearable", form: "Belt, ring, bracelet" },
      { type: "usable", form: "Handheld device" },
    ],
    effect: `Creates a shimmering energy shield around the user for one hour, during which time they gain +3 Armor (+4 Armor if the cypher is level 5 or higher).`,
  },

  {
    name: "Friction-reducing gel",
    levelOffset: 0,
    availableTypes: [{ type: "usable", form: "Spray canister" }],
    effect: `Sprayed across an area up to 10 feet (3 m) square, this gel makes things extremely slippery. For one hour per cypher level, movement tasks in the area are hindered by three steps`,
  },
  {
    name: "Frigid wall projector",
    levelOffset: 2,
    availableTypes: [{ type: "usable", form: "Complex device" }],
    effect: `Creates a wall of supercooled air up to 30 feet by 30 feet by 1 foot (9 m by 9 m by 30 cm) that inflicts damage equal to the cypher level on anything that passes through it. The wall conforms to the space available. It lasts for ten minutes.`,
  },
  {
    name: "Gas bomb",
    levelOffset: 2,
    availableTypes: [
      { type: "wearable", form: "Wristband projector (long range)" },
      {
        type: "usable",
        form: "Explosive device or ceramic sphere (thrown, short range)\n or handheld projector (long range)",
      },
    ],
    effect: null,
  },
  {
    name: "Gravity nullifier",
    levelOffset: 3,
    availableTypes: [
      { type: "internal", form: "Subdermal injection" },
      { type: "wearable", form: "Belt, boots, ring, bracelet" },
      { type: "usable", form: "Small platform on which the user must stand" },
    ],
    effect: `For one hour, the user can float into the air, moving vertically (but not horizontally without some other action, such as pushing along the ceiling) up to a short distance per round. The user must weigh less than 50 pounds (22 kg) per level of the cypher. `,
  },
  {
    name: "Gravity-nullifying spray",
    levelOffset: 2,
    availableTypes: [{ type: "usable", form: "Spray canister" }],
    effect: `A nonliving object up to the size of a human
      (two humans if the cypher is level 6 or higher)
      sprayed by this cypher floats 1d20 feet in the
      air permanently and no longer has weight if
      carried, though it needs to be strapped down.`,
  },
  {
    name: "Heat nodule",
    levelOffset: 0,
    availableTypes: [
      {
        type: "usable",
        form: "Crystal nodule affixed to a melee weapon",
      },
    ],
    effect: `For the next 28 hours, each time the weapon the nodule is attached to strikes a solid creature or object, it generates a burst of heat, inflicting an additional 2 points of damage (3 points if the cypher is level 4 or higher, 4 points if the cypher is level 6 or higher).`,
  },
  //   'Hunter/seeker',
  {
    name: "Hunter/seeker",
    levelOffset: 0,
    availableTypes: [
      {
        type: "usable",
        form: "Complex device, handheld device",
      },
      {
        type: "wearable",
        form: "Arm- or shoulder-mounted launcher",
      },
    ],
    effect: null,
  },
  //   'Image projector',
  {
    name: "Image projector",
    levelOffset: 0,
    availableTypes: [
      {
        type: "usable",
        form: "Handheld device with glass panel",
      },
      {
        type: "wearable",
        form: " Headband with device on forehead",
      },
    ],
    effect: null,
  },
  //   'Inferno wall projector',
  {
    name: "Inferno wall projector",
    levelOffset: 2,
    availableTypes: [
      {
        type: "usable",
        form: "Complex device",
      },
    ],
    effect:
      "Creates a wall of extreme heat up to  30 feet by 30 feet by 1 foot (9 m by 9 m  by 30 cm) that inflicts damage equal to  the cypher level on anything that passes  through it. The wall conforms to the space  available. It lasts for ten minutes.",
  },
  //   'Infiltrator',
  {
    name: "Infiltrator",
    levelOffset: 0,
    availableTypes: [
      {
        type: "internal",
        form: "Phases into eye, phases out when used",
      },
      {
        type: "usable",
        form: "Handheld device that launches projectile",
      },
      {
        type: "wearable",
        form: "Adheres to temple and launches projectile",
      },
    ],
    effect:
      "Tiny capsule launches and moves at great speed, mapping and scanning an unknown area. It moves 500 feet (150 m) per level, scanning an area up to 50 feet (15 m) per level away from it. It identifies basic layout, creatures, and major energy sources. Its movement is blocked by any physical or energy barrier",
  },

  //   'Instant servant',
  {
    name: "Instant servant",
    levelOffset: 0,
    availableTypes: [
      {
        type: "usable",
        form: "Handheld device",
      },
    ],
    effect:
      "Small device expands into a humanoid automaton that is roughly 2 feet (60 cm) tall. Its level is equal to the cypher level and it can understand the verbal commands of the character who activates it. Once the servant is activated, commanding it is not an action. It can make attacks or perform actions as ordered to the best of its abilities, but it cannot speak.The automaton has short-range movement but never goes farther than long range away from the character who activated it. At the GM’s discretion, the servant might have specialized knowledge, such as how to operate a particular device. Otherwise, it has no special knowledge. In any case, the servant is not artificially intelligent or capable of initiating action. It does only as commanded.The servant operates for one hour per cypher level.",
  },
  //   'Instant shelter',
  {
    name: "Instant shelter",
    levelOffset: 3,
    availableTypes: [
      {
        type: "usable",
        form: "Handheld device",
      },
    ],
    effect:
      "With the addition of water and air, the small device expands into a simple one-room structure with a door and a transparent window (two rooms with an internal door if the cypher is level 7 or higher). The structure is 10 feet by 10 feet by 20 feet (3 m by 3 m by 6 m). It is made from a form of shapestone and is permanent and immobile once created.",
  },
  //   'Intellect enhancement',
  {
    name: "Intellect enhancement",
    levelOffset: 2,
    availableTypes: [
      {
        type: "internal",
        form: "Pill, ingestible liquid",
      },
      {
        type: "usable",
        form: "Adhesive patch that activates when slapped",
      },
      {
        type: "wearable",
        form: "Injector",
      },
    ],
    effect: "Substance adds 1 to Intellect Edge for one hour (or adds 2 if the cypher is level 5 or higher).",
  },
  //   'Invisibility nodule',
  {
    name: "Invisibility nodule",
    levelOffset: 0,
    availableTypes: [
      {
        type: "usable",
        form: "Crystal nodule affixed to armor",
      },
    ],
    effect:
      "For the next ten hours per cypher level, the armor the nodule is attached to is invisible, making the wearer appear to be unarmored.",
  },
  //   'Knowledge enhancement',
  {
    name: "Knowledge enhancement",
    levelOffset: 0,
    availableTypes: [
      {
        type: "internal",
        form: "Pill, ingestible liquid",
      },
      {
        type: "usable",
        form: "Injector",
      },
      {
        type: "wearable",
        form: "Adhesive patch that activates when slapped",
      },
    ],
    effect: null,
  },
  //   'Lightning wall projector',
  {
    name: "Lightning wall projector",
    levelOffset: 2,
    availableTypes: [
      {
        type: "usable",
        form: "Complex device",
      },
    ],
    effect:
      "Creates a wall of electric bolts up to 30 feet by 30 feet by 1 foot (9 m by 9 m by 30 cm) that inflicts damage equal to the cypher level on anything that passes through it. The wall conforms to the space available. It lasts for ten minutes.",
  },
  //   'Living solvent',
  {
    name: "Living solvent",
    levelOffset: 0,
    availableTypes: [
      {
        type: "usable",
        form: "Canister containing slime",
      },
    ],
    effect:
      "Once released, this organic slime dissolves 1 cubic foot of material each round. After one round per cypher level, the slime dies and becomes inert.",
  },
  //   'Machine control implant',
  {
    name: "Machine control implant",
    levelOffset: 2,
    availableTypes: [
      {
        type: "internal",
        form: "Pill",
      },
      {
        type: "usable",
        form: "Injector",
      },
      {
        type: "wearable",
        form: "Disk that adheres to forehead, temporary tattoo",
      },
    ],
    effect:
      " When activated, the cypher splits into two pieces. One is affixed to a numenera device and the other to a character. The character can then use their mind to control the device at long range, bidding it to do anything it could do normally. Thus, a device could be activated or deactivated, and a vehicle could be piloted. The control lasts for ten minutes per cypher level, and once the device is chosen, it cannot be changed.",
  },
  //   'Magnetic attack drill',
  {
    name: "Magnetic attack drill",
    levelOffset: 2,
    availableTypes: [
      {
        type: "usable",
        form: "Small sphere with a thick screw protrusion",
      },
    ],
    effect:
      "The user throws this cypher at a target within short range, and it drills into the target for one round, inflicting damage equal to the cypher level. If the target is made of metal or wearing metal (such as armor), the attack is eased.",
  },
  //   'Magnetic master',
  {
    name: "Magnetic master",
    levelOffset: 2,
    availableTypes: [
      {
        type: "usable",
        form: "Small pyramid-shaped metallic device",
      },
      {
        type: "wearable",
        form: "Gloves with metal plates",
      },
    ],
    effect:
      "Establishes a connection with one metal object within short range that a human could hold in one hand. After this connection is established, the user can move or manipulate the object anywhere within short range (each movement or manipulation is an action). For example, the user could wield a weapon or drag a helm affixed to a foe’s head to and fro. The connection lasts for ten rounds per cypher level. ",
  },
  //   'Magnetic shield',
  {
    name: "Magnetic shield",
    levelOffset: 2,
    availableTypes: [
      {
        type: "usable",
        form: "Small pyramid-shaped metallic device",
      },
      {
        type: "wearable",
        form: "Gloves with metal plates",
      },
    ],
    effect:
      "For ten minutes per cypher level, metal objects cannot come within immediate range of the activated device. Metal items already in the area when the device is activated are slowly pushed out.",
  },
  //   'Memory lenses',
  {
    name: "Memory lenses",
    levelOffset: 0,
    availableTypes: [
      {
        type: "wearable",
        form: "Contact lenses, eyeglasses, or goggles",
      },
    ],
    effect:
      "Allows the wearer to mentally record everything they see for thirty seconds per cypher level and store the recording permanently in their long-term memory. This cypher is useful for watching someone pick a specific lock, enter a complex code, or do something else that happens quickly",
  },
  //   'Mental scrambler',
  {
    name: "Mental scrambler",
    levelOffset: 2,
    availableTypes: [
      {
        type: "usable",
        form: "Complex metal and glass device",
      },
    ],
    effect: null,
  },
  //   'Metal death',
  {
    name: "Metal death",
    levelOffset: 2,
    availableTypes: [
      {
        type: "usable",
        form: "Canister with hose",
      },
      {
        type: "wearable",
        form: "Wrist-mounted sprayer",
      },
    ],
    effect:
      "Produces a stream of foam that covers an area about 3 feet by 3 feet (1 m by 1 m), transforming any metal that it touches into a substance as brittle as thin glass. The foam affects metal to a depth of about 6 inches (15 cm).",
  },
  //   'Monoblade',
  {
    name: "Monoblade",
    levelOffset: 2,
    availableTypes: [
      {
        type: "internal",
        form: "Injection into fingertip",
      },
      {
        type: "usable",
        form: "Device similar to hilt",
      },
      {
        type: "wearable",
        form: "Glove",
      },
    ],
    effect:
      "Produces a 6-inch (15 cm) blade that’s the same level as the cypher. The blade cuts through any material of a level lower than its own. If used as a weapon, it is a light weapon that ignores Armor of a level lower than its own. The blade lasts for ten minutes.",
  },
  //   'Motion sensor',
  {
    name: "Motion sensor",
    levelOffset: 2,
    availableTypes: [
      {
        type: "internal",
        form: "Injection into spine",
      },
      {
        type: "usable",
        form: "Disk that can be affixed to the floor or another surface",
      },
      {
        type: "wearable",
        form: "Amulet",
      },
    ],
    effect:
      "Indicates when any movement occurs within short range, or when large creatures or objects move within long range (the cypher distinguishes between the two). It also indicates the number and size of the creatures or objects in motion. Once activated, it operates for one hour per cypher level.",
  },
  //   'Personal environment field',
  {
    name: "Personal environment field",
    levelOffset: 2,
    availableTypes: [
      {
        type: "usable",
        form: "Handheld device",
      },
      {
        type: "wearable",
        form: "Belt, medallion, ring",
      },
    ],
    effect:
      "Creates an aura of temperature and atmosphere that will sustain a human safely for 28 hours. The aura extends to 1 foot (30 cm) around the user (double that radius if the cypher is level 7 or higher). It does not protect against sudden flashes of temperature change (such as from a heat ray). A small number of these cyphers (1%) accommodate the preferred environment of a nonhuman, nonterrestrial creature.",
  },
  //   'Phase changer',
  {
    name: "Phase changer",
    levelOffset: 1,
    availableTypes: [
      {
        type: "internal",
        form: "Pill",
      },
      {
        type: "usable",
        form: "Handheld device",
      },
      {
        type: "wearable",
        form: "Belt, medallion, ring",
      },
    ],
    effect:
      "Puts the user out of phase for one minute (two minutes if the cypher is level 6 or higher). During this time, the user can pass through solid objects as though they were entirely insubstantial, like a ghost. They cannot make physical attacks or be physically attacked.",
  },
  //   'Phase disruptor',
  {
    name: "Phase disruptor",
    levelOffset: 2,
    availableTypes: [
      {
        type: "usable",
        form: "Complex device, plate that affixes to surface, elaborate spray atomizer",
      },
    ],
    effect:
      "Puts a portion of a physical structure (like a wall or floor) out of phase for one hour. It affects an area equal to one 5-foot (1.5 m) cube per cypher level. While the area is out of phase, creatures and objects can pass freely through it as if it were not there, although one cannot see through it, and it blocks light.",
  },
  //   'Poison (emotion)',
  {
    name: "Poison (emotion)",
    levelOffset: 2,
    availableTypes: [
      {
        type: "internal",
        form: "Pill, ingestible or injectable liquid",
      },
      {
        type: "usable",
        form: "Injector",
      },
      {
        type: "wearable",
        form: "Lipstick, false fingertip, ring with needle",
      },
    ],
    effect: null,
  },
  //   'Poison (explosive)',
  {
    name: "Poison (explosive)",
    levelOffset: 1,
    availableTypes: [
      {
        type: "internal",
        form: "Pill, ingestible or injectable liquid",
      },
      {
        type: "usable",
        form: "Injector",
      },
      {
        type: "wearable",
        form: "Lipstick, false fingertip, ring with needle",
      },
    ],
    effect: null,
  },
  //   'Poison (mind-controlling)',
  {
    name: "Poison (mind-controlling)",
    levelOffset: 2,
    availableTypes: [
      {
        type: "internal",
        form: "Pill, ingestible or injectable liquid",
      },
      {
        type: "usable",
        form: "Injector",
      },
      {
        type: "wearable",
        form: "Lipstick, false fingertip, ring with needle",
      },
    ],
    effect: null,
  },
  //   'Poison (mind-disrupting)',
  {
    name: "Poison (mind-disrupting)",
    levelOffset: 2,
    availableTypes: [
      {
        type: "internal",
        form: "Pill, ingestible or injectable liquid",
      },
      {
        type: "usable",
        form: "Injector",
      },
      {
        type: "wearable",
        form: "Lipstick, false fingertip, ring with needle",
      },
    ],
    effect:
      "The victim suffers Intellect damage equal to the cypher’s level and cannot take actions for a number of rounds equal to the cypher’s level.",
  },
  //   'Psychic communique',
  {
    name: "Psychic communique",
    levelOffset: 2,
    availableTypes: [
      {
        type: "internal",
        form: "Pill",
      },
      {
        type: "usable",
        form: "Metallic disk",
      },
      {
        type: "wearable",
        form: "Device that adheres to temple",
      },
    ],
    effect:
      " Allows the user to project a one-time, one-way telepathic message of up to ten words per cypher level, with an unlimited range, to anyone they know.",
  },
  //   'Ray emitter',
  {
    name: "Ray emitter",
    levelOffset: 2,
    availableTypes: [
      {
        type: "internal",
        form: "Subdermal implant",
      },
      {
        type: "usable",
        form: "Handheld device",
      },
      {
        type: "wearable",
        form: "Contact lens, glove, ring, wristband, headband, belt buckle, shoulder-mounted device",
      },
    ],
    effect: null,
  },
  //   'Ray emitter (numbing)',
  {
    name: "Ray emitter (numbing)",
    levelOffset: 2,
    availableTypes: [
      {
        type: "internal",
        form: "Subdermal implant",
      },
      {
        type: "usable",
        form: "Handheld device",
      },
      {
        type: "wearable",
        form: "Contact lens, glove, ring, wristband, headband, belt buckle, shoulder-mounted device",
      },
    ],
    effect:
      " Allows the user to project a ray of energy up to long range (very long range if the cypher is level 6 or higher) that numbs one limb of the target, making it useless for one minute. A small number of these devices (5%) induce numbing that lasts for one hour.",
  },
  //   'Ray emitter (paralysis)',
  {
    name: "Ray emitter (paralysis)",
    levelOffset: 2,
    availableTypes: [
      {
        type: "internal",
        form: "Subdermal implant",
      },
      {
        type: "usable",
        form: "Handheld device",
      },
      {
        type: "wearable",
        form: "Contact lens, glove, ring, wristband, headband, belt buckle, shoulder-mounted device",
      },
    ],
    effect:
      "Allows the user to project a ray of energy up to very long range that paralyzes the target for one minute. A small number of these devices (5%) induce paralysis that lasts for one hour.",
  },
  //   'Reality spike',
  {
    name: "Psychic communique",
    levelOffset: 4,
    availableTypes: [
      {
        type: "usable",
        form: "Metallic spike",
      },
    ],
    effect:
      "Once activated, the spike does not move—ever—even if activated in midair. A Might action will dislodge the spike, but then it is ruined.",
  },
  //   'Rejuvenator', //70-71!!!
  {
    name: "Rejuvenator",
    levelOffset: 2,
    availableTypes: [
      {
        type: "internal",
        form: "Pill, ingestible liquid",
      },
      {
        type: "usable",
        form: "Injector",
      },
      {
        type: "wearable",
        form: "Adhesive patch that activates when slapped",
      },
    ],
    effect: null,
  },
  //   'Rejuvenator', //70-71!!!
  {
    name: "Rejuvenator",
    levelOffset: 2,
    availableTypes: [
      {
        type: "internal",
        form: "Pill, ingestible liquid",
      },
      {
        type: "usable",
        form: "Injector",
      },
      {
        type: "wearable",
        form: "Adhesive patch that activates when slapped",
      },
    ],
    effect: null,
  },
  //   'Remote viewer',
  {
    name: "Remote viewer",
    levelOffset: 0,
    availableTypes: [
      {
        type: "usable",
        form: "Device that splits into two parts when activated, one with a glass screen",
      },
    ],
    effect:
      "For one hour per cypher level, the glass screen on one part shows everything going on in the vicinity of the other part, regardless of the distance between the two parts.",
  },
  //   'Repair unit',
  {
    name: "Repair unit",
    levelOffset: 2,
    availableTypes: [
      {
        type: "usable",
        form: "Handheld device",
      },
      {
        type: "wearable",
        form: "Shoulder- or arm-mounted launcher, belt-mounted device",
      },
    ],
    effect:
      "Device becomes a multiarmed sphere that floats. It repairs one designated numenera device (of a level equal to or less than its own) that has been damaged but not destroyed. The repair unit can even create spare parts, unless the GM rules that the parts are too specializedor rare (in which case, the unit repairs the device entirely except for the specialized part). Repair time is 1d100 + 20 minutes.",
  },
  //   'Retaliation nodule',
  {
    name: "Retaliation nodule",
    levelOffset: 0,
    availableTypes: [
      {
        type: "usable",
        form: "Crystal nodule affixed to armor",
      },
    ],
    effect:
      "For the next 28 hours, anyone striking the armor the nodule is attached to triggers a small burst of electricity that inflicts 1 point of damage (2 points if the cypher is level 4 or higher, 3 points if the cypher is level 6 or higher). No action or roll is required by the armor’s wearer.",
  },
  //   'Sheen',
  {
    name: "Sheen",
    levelOffset: 0,
    availableTypes: [
      {
        type: "internal",
        form: "Pill, ingestible liquid",
      },
      {
        type: "usable",
        form: "Injector",
      },
    ],
    effect:
      "For one week, the user’s cells are coated with a protective veneer that resists damage (+1 to Armor, or +2 to Armor if the cypher is level 5 or higher) and eases Might defense rolls by two steps. However, healing is more difficult during this time; all recovery rolls suffer a -1 penalty",
  },
  //   'Shock nodule',
  {
    name: "Shock nodule",
    levelOffset: 0,
    availableTypes: [
      {
        type: "usable",
        form: "Crystal nodule affixed to a melee weapon",
      },
    ],
    effect:
      "For the next 28 hours, each time the weapon the nodule is attached to strikes a solid creature or object, it generates a burst of electricity, inflicting 1 additional point of damage (2 points if the cypher is level 4 or higher, 3 points if the cypher is level 6 or higher).",
  },
  //   'Shocker',
  {
    name: "Shocker",
    levelOffset: 4,
    availableTypes: [
      {
        type: "internal",
        form: "Subdermal implant",
      },
      {
        type: "usable",
        form: "Short rod",
      },
      {
        type: "wearable",
        form: "Ring, palm disk",
      },
    ],
    effect:
      "Delivers a powerful burst of electricity that shocks any creature touched, inflicting damage equal to the cypher’s level.",
  },
  //   'Skill boost',
  {
    name: "Skill boost",
    levelOffset: 0,
    availableTypes: [
      {
        type: "internal",
        form: "Pill, ingestible liquid",
      },
      {
        type: "usable",
        form: "Injector",
      },
    ],
    effect: null,
  },
  //   'Sleep inducer',
  {
    name: "Sleep inducer",
    levelOffset: 0,
    availableTypes: [
      {
        type: "internal",
        form: "Pill, ingestible liquid",
      },
      {
        type: "usable",
        form: "Injector, gas sprayer",
      },
      {
        type: "wearable",
        form: "Fingertip cusp, ring, glove",
      },
    ],
    effect:
      "Touch or ingestion puts the victim to sleep for ten minutes or until awoken by a violent action or an extremely loud noise.",
  },
  //   'Sonic hole',
  {
    name: "Sonic hole",
    levelOffset: 2,
    availableTypes: [
      {
        type: "usable",
        form: "Small handheld device",
      },
      {
        type: "wearable",
        form: " Wristband, ring, belt-mounted device",
      },
    ],
    effect:
      "Draws all sound within long range into the device for one round per cypher level. Within the affected area, no sound can be heard.",
  },
  //   'Sound dampener',
  {
    name: "Sound dampener",
    levelOffset: 2,
    availableTypes: [
      {
        type: "internal",
        form: "Implant",
      },
      {
        type: "usable",
        form: "Small handheld device",
      },
      {
        type: "wearable",
        form: " Wristband, ring, belt-mounted device, boots",
      },
    ],
    effect:
      "Dampens all sound within immediate range for one minute per cypher level, providing an asset for all creatures in the area to attempt stealthy actions",
  },
  //   'Spatial warp', LEVEL 5
  {
    name: "Spatial warp",
    levelOffset: 5,
    availableTypes: [
      {
        type: "usable",
        form: "Small metal ring",
      },
    ],
    effect:
      "When affixed to another numenera device that affects a single target at range, that range is increased to 1 mile (1.5 km) with no penalties. Space is temporarily warped in terms of seeing and reaching the target. If direct line of sight is important to the device’s effect, it remains important. Creating the spatial warp functions as one use of the device.",
  },
  //   'Speed boost',
  {
    name: "Speed boost",
    levelOffset: 2,
    availableTypes: [
      {
        type: "internal",
        form: "Pill, ingestible liquid",
      },
      {
        type: "usable",
        form: "Injector",
      },
      {
        type: "wearable",
        form: "Adhesive patch that activates when slapped",
      },
    ],
    effect: "Substance adds 1 to Speed Edge for one hour (or adds 2 if the cypher is level 5 or higher)",
  },
  //   'Stim', //84-85 !!! LEVEL 6
  {
    name: "Stim",
    levelOffset: 2,
    availableTypes: [
      {
        type: "internal",
        form: "Pill, ingestible liquid",
      },
      {
        type: "usable",
        form: "Injector",
      },
    ],
    effect: "Eases the next action taken by three steps",
  },
  //   'Stim', //84-85 !!! LEVEL 6
  {
    name: "Stim",
    levelOffset: 2,
    availableTypes: [
      {
        type: "internal",
        form: "Pill, ingestible liquid",
      },
      {
        type: "usable",
        form: "Injector",
      },
    ],
    effect: "Eases the next action taken by three steps",
  },
  //   'Strength boost',
  {
    name: "Strength boost",
    levelOffset: 2,
    availableTypes: [
      {
        type: "internal",
        form: "Pill, ingestible liquid",
      },
      {
        type: "usable",
        form: "Injector",
      },
      {
        type: "wearable",
        form: "Adhesive patch that activates when slapped",
      },
    ],
    effect: "Substance adds 1 to Might Edge for one hour (or adds 2 if the cypher is level 5 or higher).",
  },
  //   'Subdual field',
  {
    name: "Subdual field",
    levelOffset: 3,
    availableTypes: [
      {
        type: "usable",
        form: "Complex device",
      },
    ],
    effect:
      "Two rounds after being activated, the device creates an invisible field that fills a specified area (such as a cube of a certain size) within long range of the device. The field lasts for one minute. It affects the minds of thinking beings within the field, preventing them from taking hostile actions. The effect lasts as long as they remain in the field and for 1d6 rounds after, although an Intellect defense roll is allowed each round to act normally (both in the field and after leaving it).",
  },
  //   'Telepathy implant',
  {
    name: "Telepathy implant",
    levelOffset: 2,
    availableTypes: [
      {
        type: "internal",
        form: "Pill",
      },
      {
        type: "usable",
        form: "Injector",
      },
      {
        type: "wearable",
        form: "Disk that adheres to forehead, temporary tattoo",
      },
    ],
    effect:
      "The user activates the device and targets one creature within close range. For one hour per cypher level, the device enables two-way long-range mental communication between the user and the target. This lasts for one hour per cypher level. Sometimes multiple cyphers of this type are found together and allow communication between all of them.",
  },
  //   'Teleporter (bounder)',
  {
    name: "Teleporter (bounder)",
    levelOffset: 2,
    availableTypes: [
      {
        type: "usable",
        form: "Complex device, handheld device",
      },
      {
        type: "wearable",
        form: "Belt, wristband, ring, full bodysuit",
      },
    ],
    effect:
      "User teleports up to 100 × the cypher level in feet (30 × cypher level in m) to a location they can see. They arrive safely with their possessions but cannot take anything else with them",
  },
  //   'Teleporter (traveler)'
  {
    name: "Teleporter (traveler)",
    levelOffset: 4,
    availableTypes: [
      {
        type: "usable",
        form: "Complex device, handheld device",
      },
      {
        type: "wearable",
        form: "Belt, wristband, ring, full bodysuit",
      },
    ],
    effect:
      "User teleports up to 100 × the cypher level in miles (160 x the cypher level in km) to a location they have previously visited. They arrive safely with their possessions but cannot take anything else with them.",
  },
  //   'Temporal viewer',
  {
    name: "Temporal viewer",
    levelOffset: 4,
    availableTypes: [
      {
        type: "usable",
        form: "Complex device, handheld device",
      },
      {
        type: "wearable",
        form: "Wristband",
      },
    ],
    effect:
      "Dampens all sound within immediate range for one minute per cypher level, providing an asset for all creatures in the area to attempt stealthy actions",
  },
  //   'Time dilation nodule (defensive)',
  {
    name: "Time dilation nodule (defensive)",
    levelOffset: 4,
    availableTypes: [
      {
        type: "usable",
        form: "Crystal nodule affixed to armor",
      },
    ],
    effect:
      "For the next 28 hours, the wearer of the armor moves in seemingly random, rapid jumps, a few inches to one side or the other, when attacked. This is an asset that eases attacks by two steps (three steps if the cypher is level 6 or higher).",
  },
  //   'Time dilation nodule (offensive)',
  {
    name: "Time dilation nodule (offensive)",
    levelOffset: 0,
    availableTypes: [
      {
        type: "usable",
        form: "Crystal nodule affixed to a melee weapon",
      },
    ],
    effect:
      "For the next 28 hours, the attacker moves at almost instantaneous speeds when they swing the weapon, easing their attacks by two steps (three steps if the cypher is level 6 or higher).",
  },
  //   'Tracer',
  {
    name: "Tracer",
    levelOffset: 0,
    availableTypes: [
      {
        type: "usable",
        form: "Handheld device",
      },
      {
        type: "wearable",
        form: " Wristband",
      },
    ],
    effect:
      "Fires a microscopic tracer that clings to any surface within short range (long range if the cypher is level 4 or higher, very long range if the cypher is level 6 or higher). For the next 28 hours, the launcher shows the distance and direction to the tracer, as long as it is in the same dimension",
  },
  //   'Visage changer',
  {
    name: "Visage changer",
    levelOffset: 0,
    availableTypes: [
      {
        type: "internal",
        form: "Pill or injection that produces temporary subdermal, malleable implants",
      },
      {
        type: "usable",
        form: "Tube of moldable paste",
      },
    ],
    effect:
      "Chhanges the appearance of one human sized creature, providing an asset to disguise tasks (easing them by two steps if the cypher is level 5 or higher). The change takes ten minutes to apply and lasts for 28 hours.",
  },
  //   'Visual displacement device',
  {
    name: "Visual displacement device",
    levelOffset: 0,
    availableTypes: [
      {
        type: "usable",
        form: "Handheld device",
      },
      {
        type: "wearable",
        form: "Belt or bracelet",
      },
    ],
    effect:
      "Projects holographic images of the wearer to confuse attackers. The images appear around the wearer. This gives the wearer an asset to Speed defense actions for ten minutes per cypher level.",
  },
  //   'Vocal translator',
  {
    name: "Vocal translator",
    levelOffset: 0,
    availableTypes: [
      {
        type: "internal",
        form: "Pill, ingestible liquid",
      },
      {
        type: "usable",
        form: "Disk that must be held to forehead",
      },
      {
        type: "wearable",
        form: "Headband",
      },
    ],
    effect:
      "Translates everything said by the user into a language that anyone can understand for 28 hours per cypher level",
  },
  //   'Warmth projector',
  {
    name: "Warmth projector",
    levelOffset: 0,
    availableTypes: [
      {
        type: "internal",
        form: "Subdermal implant",
      },
      {
        type: "usable",
        form: "Injector",
      },
      {
        type: "wearable",
        form: "Bodysuit, belt",
      },
    ],
    effect:
      "Keeps the user warm and comfortable in the harshest cold temperatures for 28 hours. During this time, the user has Armor equal to the cypher level that protects against cold damage.",
  },
  //   'Water breather',
  {
    name: "Sound dampener",
    levelOffset: 0,
    availableTypes: [
      {
        type: "internal",
        form: "Pill, ingestible liquid",
      },
      {
        type: "usable",
        form: "Injector",
      },
    ],
    effect:
      "Allows an air breather to extract oxygen from water for five hours per cypher level so they can breathe underwater.",
  },
  //   'X-ray viewer',
  {
    name: "X-ray viewer",
    levelOffset: 4,
    availableTypes: [
      {
        type: "usable",
        form: "Glass panel",
      },
    ],
    effect:
      "When held up against a solid surface, this panel allows the user to see through up to 2 feet (60 cm) of material. The panel works only if the cypher’s level is higher than the material’s level. The effect lasts for one minute per cypher level. ",
  },
];

export const chemicalFactoryMap = {
  "base":
    "After one hour, the sweat of the user produces 1d6 doses of a valuable liquid (these doses are not considered cyphers). They must be used within one week. Liquid effect: ",
  "1-4": "Euphoric for 1d6 hours",
  "5-8": " Hallucinogenic for 1d6 hours",
  "9-12": "Stimulant for 1d6 hours",
  "13-16": "Depressant for 1d6 hours",
  "17-20": "Nutrient supplement",
  "21-25": "Antivenom",
  "26-30": "Cures disease",
  "31-35": "See in the dark for one hour",
  "36-45": "Restores a number of Might Pool points equal to cypher level",
  "46-55": "Restores a number of Speed Pool points equal to cypher level",
  "56-65": "Restores a number of Intellect Pool points equal to cypher level",
  "66-75": "Increases Might Edge by 1 for one hour",
  "76-85": "Increases Speed Edge by 1 for one hour",
  "86-95": "Increases Intellect Edge by 1 for one hour",
  "96-100": "Restores all Pools to full",
};

export const detonationMap = {
  "base": "Explodes in an immediate radius, inflicting damage equal to the cypher level. Damage type: ",
  "1-10": "Cell-disrupting (harms only flesh)",
  "11-30": "Corrosive",
  "31-40": "Electrical discharge",
  "41-50": "Heat drain (cold)",
  "51-75": "Fire",
  "76-100": "Shrapnel",
};

export const detonationMassiveMap = {
  ...detonationMap,
  base: "Explodes in a short-range radius, inflicting damage equal to the cypher level. Damage type: ",
};

export const detonationSpawnMap = {
  ...detonationMap,
  base: "Bursts in an immediate radius, blinding all within it for one minute and inflicting damage equal to the cypher level. The burst spawns 1d6 additional detonations; on the next round, each additional detonation flies to a random spot within short range and explodes in an immediate radius. All detonations damage type: ",
};

export const gasBombMap = {
  "base":
    " Bursts in a poisonous cloud within an immediate distance. The cloud lingers for 1d6 rounds unless conditions dictate otherwise. Cloud effect: ",
  "1-10": "Thick smoke: occludes sight while the cloud lasts.",
  "11-20":
    "Choking gas: living creatures thatbreathe lose their actions to choking and coughing for a number of rounds equal to the cypher level.",
  "21-50": "Poison gas: living creatures that breathe suffer damage equal to the cypher level.",
  "51-60": "Corrosive gas: everything suffers damage equal to the cypher level.",
  "61-65":
    "Hallucinogenic gas: living creatures that breathe lose their actions to hallucinations and visions for a number of rounds equal to the cypher level.",
  "66-70": "Nerve gas: living creatures that breathe suffer Speed damage equal to the cypher level.",
  "71-80": "Mind-numbing gas: living creatures that breathe suffer Intellect damage equal to the cypher level.",
  "81-83":
    "Fear gas: living creatures that breathe and think flee in a random direction in fear (or are paralyzed with fear) for a number of rounds equal to the cypher level.",
  "84-86": "Amnesia gas: living creatures that breathe and think permanently lose all memory of the last minute.",
  "87-96":
    "Sleep gas: living creatures that breathe fall asleep for a number of rounds equal to the cypher level or until awoken by a violent action or an extremely loud noise.",
  "97-100":
    "Rage gas: living creatures that breathe and think make a melee attack on the nearest creature and continue to do so for a number of rounds equal to the cypher level. ",
};

export const hunterSeekerMap = {
  "base":
    " With long-range movement, this intelligent missile tracks and attacks a specified target (target must be within sight when selected). If it misses, it continues to attack one additional time per cypher level until it hits. For example, a level 4 hunter/seeker will attack a maximum of five times. Missle hit effect: ",
  "1-50": "Inflicts 8 points of damage.",
  "51-80": "Bears a poisoned needle that inflicts 3 points of damage plus poison.",
  "81-90": "Explodes, inflicting 6 points of damage to all within immediate range.",
  "91-95": "Shocks for 4 points of electricity damage, and stuns for one round per cypher level.",
  "96-00":
    "Covers target in sticky goo that immediately hardens, holding them fast until they break out with a Might action (difficulty equal to the cypher level + 2).",
};

export const imageProjectorMap = {
  "base":
    "Projects one of the following immobile images in the area described for one hour. The image appears up to a close distance away (long distance if the cypher level is 4 or higher, very long distance if the cypher level is 6 or higher). Scenes include movement, sound, and smell.",
  "1-20": "Terrifying creature of an unknown species, perhaps no longer alive in the world (10-foot [3 m] cube)",
  "21-40": "Huge machine that obscures sight (30-foot [9 m] cube)",
  "41-50": "Beautiful pastoral scene (50-foot [15 m] cube)",
  "51-60": "Food that looks delicious but may not be familiar (10-foot [3 m] cube)",
  "61-80": "Solid color that obscures sight (50-foot [15 m] cube)",
  "81-00": "Incomprehensible scene that is disorienting and",
};

export const knowledgeEnhancementMap = {
  "base":
    " For the next 28 hours, the character has training in a predetermined skill (or two skills if the cypher is level 5 or higher). Although the skill could be anything (including something specific to the operation of one device or something similar), enhanced skill: ",
  "1-10": "Melee attacks",
  "11-20": "Ranged attacks",
  "21-40": "Understanding numenera (sometimes specific to one device)",
  "41-50": "Repairing (sometimes specific to one device)",
  "51-60": "Crafting (usually specific to one thing)",
  "61-70": "Persuasion",
  "71-75": "Healing",
  "76-80": "Speed defense",
  "81-85": "Intellect defense",
  "86-90": "Swimming",
  "91-95": "Riding",
  "96-100": "Sneaking",
};

export const mentalScramblerMap = {
  "base":
    "Two rounds after being activated, the device creates an invisible field that fills an area within short range and lasts for one minute. The field scrambles the mental processes of all thinking creatures. The effect lasts as long as they remain in the field and for 1d6 rounds after, although an Intellect defense roll is allowed each round to act normally (both in the field and after leaving it). Each mental scrambler is keyed to a specific effect. Effect: ",
  "1-30": "Victims cannot act.",
  "31-40": "Victims cannot speak.",
  "41-50": "Victims move slowly (immediate range) and clumsily.",
  "51-60": "Victims cannot see or hear.",
  "61-70": "Victims lose all sense of direction, depth, and proportion.",
  "71-80": "Victims do not recognize anyone they know.",
  "81-88": "Victims suffer partial amnesia.",
  "89-94": "Victims suffer total amnesia.",
  "95-98": "Victims lose all inhibitions, revealing secrets and performing surprising actions.",
  "99-100": "Victims’ ethics are inverted.",
};

export const poisonEmotionMap = {
  "base": "The victim feels a specific emotion for one hour. Effect: ",
  "1-20":
    "Anger. Likely to attack anyone who disagrees with them. Very hard to interact with; all interaction tasks are hindered by two steps.",
  "21-40": "Fear. Flees in terror for one minute when threatened.",
  "41-60": "Lust. Cannot focus on any nonsexual activity.",
  "61-75": "Sadness. All tasks are hindered.",
  "76-85": "Complacency. Has no motivation. All tasks are hindered by two steps.",
  "86-95": "Joy. Easy to interact with in a pleasant manner; all pleasant interaction tasks are eased.",
  "96-100":
    "Love. Much easier to interact with; all interaction tasks are eased by two steps, but temporary attachment is likely.",
};

export const poisonExplosiveMap = {
  "base":
    " Once this substance enters the bloodstream, it travels to the brain and reorganizes into an explosive that detonates when activated, inflicting 10 points of damage (ignoring Armor). Means of detonation: ",
  "1-25": "The detonator is activated (must be within long range).",
  "26-40": "A specified amount of time passes.",
  "41-50": "The victim takes a specific action.",
  "51-55": "A specific note is sung or played on an instrument within short range.",
  "56-60": "The victim smells a specific scent within immediate range.",
  "61-80": "The victim comes within long range of the detonator.",
  "81-100": "The victim is no longer within long range of the detonator.",
};

export const poisonMindControllingMap = {
  "base": "The victim must carry out a specific action in response to a specific trigger. Action: ",
  "1-20": "Lies down for one minute with eyes closed when told to do so.",
  "21-40": "Flees in terror for one minute when threatened",
  "41-60": "Answers questions truthfully for one minute",
  "61-75": "Attacks close friend for one round when within immediate range",
  "76-85": "Obeys next verbal command given (if it is understood).",
  "86-95": "For 28 hours, becomes sexually attracted to the next creature of its own species that it sees",
  "96-100":
    "For one minute, moves toward the next red object seen in lieu of all other actions, even ignoring self preservation",
};

export const rayEmitterMap = {
  "base":
    "Allows the user to project a ray of destructive energy up to very long range that inflicts damage equal to the cypher’s level. Ray type: ",
  "1-50": "Heat/concentrated light",
  "51-60": "Cell-disrupting radiation",
  "61-80": "Force",
  "81-87": "Magnetic wave",
  "88-93": "Molecular bond disruption",
  "94-100": "Concentrated cold",
};

export const rejuvenatorMap = {
  "base": "Substance restores a number of points equal to the cypher’s level to ",
  "1-50": "Might Pool",
  "51-75": "Speed Pool",
  "76-00": "Intellect Pool",
};

export const skillBoostMap = {
  "base":
    " Dramatically but temporarily alters the user’s mind and body so that one specific physical action they can perform is eased by three steps. Once activated, this boost can be used a number of times equal to the cypher’s level, but only within a 28-hour period. The boost takes effect each time the action is performed, so a level 3 cypher boosts the first three times the action is attempted. Action type: ",
  "1-15": "Melee attack",
  "16-30": "Ranged attack",
  "31-40": "Speed defense",
  "41-50": "Might defense",
  "51-60": "Intellect defense",
  "61-68": "Jumping",
  "69-76": "Climbing",
  "77-84": "Running",
  "85-92": "Swimming",
  "93-94": "Sneaking",
  "95-96": "Balancing",
  "97-98": "Perceiving",
  "99": "Carrying",
  "100": "Escaping",
};

export const customEffectsMap = {
  "Chemical factory": chemicalFactoryMap,
  "Detonation": detonationMap,
  "Detonation (massive)": detonationMassiveMap,
  "Detonation (spawn)": detonationSpawnMap,
  "Gas bomb": gasBombMap,
  "Hunter/seeker": hunterSeekerMap,
  "Image projector": imageProjectorMap,
  "Knowledge enhancement": knowledgeEnhancementMap,
  "Mental scrambler": mentalScramblerMap,
  "Poison (emotion)": poisonEmotionMap,
  "Poison (explosive)": poisonExplosiveMap,
  "Poison (mind-controlling)": poisonMindControllingMap,
  "Ray emitter": rayEmitterMap,
  "Rejuvenator": rejuvenatorMap,
  "Skill boost": skillBoostMap,
};
