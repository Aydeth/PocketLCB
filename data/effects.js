const effectsData = {
    "Burn": {
        type: "negative",
        description: "At the end of the turn, take fixed damage by the effect’s Potency. Then, reduce its Count by 1."
    },
    "Bleed": {
        type: "negative", 
        description: "When tossing an attack Coin, take fixed damage by the effect’s Potency. Then, reduce its Count by 1."
    },
    "Tremor": {
        type: "negative",
        description: "When attacked by skills that burst Tremor, raise the Stagger Threshold by the effect’s Potency. At the end of the turn, reduce the Count by 1."
    },
    "Rupture": {
        type: "negative",
        description: "When hit by an attack, take fixed damage by the effect’s Potency. Then, reduce its Count by 1."
    },
    "Sinking": {
        type: "negative",
        description: "When hit by an attack, take fixed SP damage by the effect’s Potency. (Units with no Sanity take Gloom damage instead.) Then, reduce its Count by 1."
    },
    "Poise": {
        type: "positive",
        description: "On hit, gain a Potency-based chance to deal critical damage, reducing the Count by 1 if successful. At the end of the turn, reduce the Count by 1."
    },
    "Charge": {
        type: "positive",
        description: "Resource used by certain skills for additional effects. Its Count can go up to 20. Count lowers by 1 at the end of each turn."
    },
    "Blunt": {
        type: "physical",
        description: ""
    },
    "Slash": {
        type: "physical",
        description: ""
    },
    "Pierce": {
        type: "physical",
        description: ""
    },
    "Defense Level Down": {
        type: "negative",
        description: "Defense Level decreases based on the effect's Potency for one turn."
    },
    "Defense Level Up": {
        type: "positive",
        description: "Defense Level increases based on the effect's Potency for one turn."
    },
    "Offense Level Down": {
        type: "negative",
        description: "Offense level decreases based on the effect's Potency for one turn."
    },
    "Offense Level Up": {
        type: "positive",
        description: "Offense level increases based on the effect's Potency for one turn."
    },
    "Damage Down": {
        type: "negative",
        description: "Deal less damage with skills based on the effect’s Count for one turn. (Max 10)"
    },
    "Damage Up": {
        type: "positive",
        description: "Deal more damage with skills based on the effect’s Count for one turn. (Max 10)"
    },
    "Power Down": {
        type: "negative",
        description: "All skills lose final Power by the effect’s Count for one turn."
    },
    "Power Up": {
        type: "positive",
        description: "Attack skills gain final Power by the effect’s Count for one turn."
    },
    "Tremor Burst": {
        type: "negative",
        description: "Raise target's Stagger Threshold by Tremor Potency on target"
    },
    "Amplitude Conversion": {
        type: "neutral",
        description: "Converts Tremor or already converted Tremor on target to a different type of Tremor.\nPotency and Count values do not change over the conversion."
    },
    "Amplitude Entanglement": {
        type: "neutral",
        description: "- Fuses the effects of the Tremor type added by Amplitude Entanglement and Tremor type currently on target together under Tremor - Superposition.\n- Potency and Count values do not change over Entanglement.\n- When triggering Amplitude Conversion for Tremor - Superposition, it activates as Amplitude Entanglement instead.\n- Turn End: Converted into base Tremor."
    }
};