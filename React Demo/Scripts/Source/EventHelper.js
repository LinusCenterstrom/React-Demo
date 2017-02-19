export const getEventSummary = function(ev) {
    if (!ev) {
        return {
            Income: 0,
            Cost: 0,
            ParticipantCount: 0
        };
    }
    let income = ev.Income || 0;
    let cost = ev.Cost || 0;
    let participantCount = 0;

    const participants = ev.Participants;

    if (participants) {
        for (let partid in participants) {
            if (participants.hasOwnProperty(partid)) {
                cost += participants[partid].Cost || 0;
                income += participants[partid].Income || 0;
                participantCount ++;
            }
        }
    }

    return {
        Income: income,
        Cost: cost,
        ParticipantCount: participantCount
    };
};