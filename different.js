
    function auto_w_s() {
        let spike_in_inv = [156, 154, 162, 163, 164, 117, 213].filter(e => user.inv.can_select.map(e => e.id).includes(e)).at(-1) /// wood, stone, gold, dia, ame, reidite
        if (world.units[0].filter(e => e.pid != user.id && !user.team.includes(e.pid)).filter(e => Utils.dist(world.units[0].filter(e => e.pid == user.id)[0]?.r, e?.r) < 130)[0]?.r && spike_in_inv) {
            let player = Object.values(world.units[0].filter(e => e.pid == user.id)[0].r)
            let enemy = Object.values(world.units[0].filter(e => e.pid != user.id && !user.team.includes(e.pid)).filter(e => Utils.dist(world.units[0].filter(e => e.pid == user.id)[0].r, e.r) < 130)[0].r)
            let angle = Utils.get_angle_2(...player, ...enemy)
            let pi2 = Math.PI * 2;
            client.socket.send(JSON.stringify([10, spike_in_inv, Math.floor((((angle + pi2) % pi2) * 255) / pi2), 0]))
        }
    }
