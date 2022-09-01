// Automatically generated with Reach 0.1.11 (f33abc3d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f33abc3d)';
export const _backendVersion = 23;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc2
    });
  const ctc5 = stdlib.T_Data({
    None: ctc3,
    Some: ctc3
    });
  const map0_ctc = ctc4;
  
  const map1_ctc = ctc5;
  
  
  const NFT_owner = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v563, v564, v565, v566] = svs;
      return (await ((async () => {
        
        
        return v563;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v563, v564, v734, v735] = svs;
      return (await ((async () => {
        
        
        return v563;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v563, v564, v732, v733, v734, v735, v736, v743] = svs;
      return (await ((async () => {
        
        
        return v563;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v563, v564, v565, v587, v588, v589, v596] = svs;
      return (await ((async () => {
        
        
        return v563;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      NFT: {
        owner: {
          decode: NFT_owner,
          dom: [],
          rng: ctc0
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2],
      4: [ctc0, ctc1, ctc2, ctc0],
      6: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc0, ctc2, ctc2],
      7: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3]);
  return {
    mapDataTy: ctc4
    };
  };
export async function Auctioneer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    deadline: ctc1,
    nftId: ctc4
    });
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Data({
    Buyer_optIn0_59: ctc6,
    Buyer_submitBid0_59: ctc7
    });
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Tuple([ctc10, ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  
  const v558 = stdlib.protect(ctc5, await interact.getAuctionProps(), {
    at: './index.rsh:42:67:application',
    fs: ['at ./index.rsh:41:18:application call to [unknown function] (defined at: ./index.rsh:41:22:function exp)'],
    msg: 'getAuctionProps',
    who: 'Auctioneer'
    });
  const v559 = v558.deadline;
  const v560 = v558.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v560, v559],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:45:14:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:45:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v564, v565], secs: v567, time: v566, didSend: v32, from: v563 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v564
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v564, v565], secs: v567, time: v566, didSend: v32, from: v563 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v563, v564, v565, v566],
    evt_cnt: 0,
    funcNum: 1,
    lct: v566,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:50:14:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:47:18:decimal', stdlib.UInt_max, '1'), v564]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v574, time: v573, didSend: v39, from: v572 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:47:18:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v564
        });
      
      const v587 = stdlib.safeAdd(v566, v565);
      const v588 = stdlib.checkedBigNumberify('./index.rsh:60:19:decimal', stdlib.UInt_max, '0');
      const v589 = v573;
      const v590 = v566;
      const v596 = stdlib.checkedBigNumberify('./index.rsh:38:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v601 = stdlib.le(v590, v587);
        
        return v601;})()) {
        sim_r.isHalt = false;
        }
      else {
        
        const v732 = stdlib.safeAdd(v590, v565);
        const v733 = stdlib.checkedBigNumberify('./index.rsh:90:35:decimal', stdlib.UInt_max, '0');
        const v734 = stdlib.checkedBigNumberify('./index.rsh:90:22:decimal', stdlib.UInt_max, '0');
        const v735 = v563;
        const v736 = v589;
        const v737 = v590;
        const v743 = v596;
        
        if (await (async () => {
          const v748 = stdlib.le(v737, v732);
          
          return v748;})()) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v735,
            tok: v564
            });
          sim_r.txns.push({
            kind: 'from',
            to: v563,
            tok: undefined /* Nothing */
            });
          sim_r.isHalt = false;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc4, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v574, time: v573, didSend: v39, from: v572 } = txn2;
  ;
  ;
  const v581 = stdlib.addressEq(v563, v572);
  stdlib.assert(v581, {
    at: './index.rsh:50:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Auctioneer'
    });
  stdlib.protect(ctc0, await interact.getBids(), {
    at: './index.rsh:52:30:application',
    fs: ['at ./index.rsh:52:30:application call to [unknown function] (defined at: ./index.rsh:52:30:function exp)', 'at ./index.rsh:52:30:application call to "liftedInteract" (defined at: ./index.rsh:52:30:application)'],
    msg: 'getBids',
    who: 'Auctioneer'
    });
  
  const v587 = stdlib.safeAdd(v566, v565);
  let v588 = stdlib.checkedBigNumberify('./index.rsh:60:19:decimal', stdlib.UInt_max, '0');
  let v589 = v573;
  let v590 = v566;
  let v596 = stdlib.checkedBigNumberify('./index.rsh:38:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v601 = stdlib.le(v590, v587);
    
    return v601;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 7,
      out_tys: [ctc8],
      timeoutAt: ['time', v587],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v563, v564, v565, v587, v588, v589, v596],
        evt_cnt: 0,
        funcNum: 8,
        lct: v589,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:82:19:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v725, time: v724, didSend: v285, from: v723 } = txn4;
          
          ;
          
          const cv588 = v588;
          const cv589 = v724;
          const cv590 = v589;
          const cv596 = v596;
          
          await (async () => {
            const v588 = cv588;
            const v589 = cv589;
            const v590 = cv590;
            const v596 = cv596;
            
            if (await (async () => {
              const v601 = stdlib.le(v590, v587);
              
              return v601;})()) {
              sim_r.isHalt = false;
              }
            else {
              
              const v732 = stdlib.safeAdd(v590, v565);
              const v733 = stdlib.checkedBigNumberify('./index.rsh:90:35:decimal', stdlib.UInt_max, '0');
              const v734 = stdlib.checkedBigNumberify('./index.rsh:90:22:decimal', stdlib.UInt_max, '0');
              const v735 = v563;
              const v736 = v589;
              const v737 = v590;
              const v743 = v596;
              
              if (await (async () => {
                const v748 = stdlib.le(v737, v732);
                
                return v748;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'from',
                  to: v735,
                  tok: v564
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v563,
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                }}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc10, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v725, time: v724, didSend: v285, from: v723 } = txn4;
      ;
      const v726 = stdlib.addressEq(v563, v723);
      stdlib.assert(v726, {
        at: './index.rsh:82:19:dot',
        fs: ['at ./index.rsh:81:40:application call to [unknown function] (defined at: ./index.rsh:81:40:function exp)'],
        msg: 'sender correct',
        who: 'Auctioneer'
        });
      stdlib.protect(ctc0, await interact.showTimeout(), {
        at: './index.rsh:83:43:application',
        fs: ['at ./index.rsh:83:43:application call to [unknown function] (defined at: ./index.rsh:83:43:function exp)', 'at ./index.rsh:83:43:application call to "liftedInteract" (defined at: ./index.rsh:83:43:application)', 'at ./index.rsh:81:40:application call to [unknown function] (defined at: ./index.rsh:81:40:function exp)'],
        msg: 'showTimeout',
        who: 'Auctioneer'
        });
      
      const cv588 = v588;
      const cv589 = v724;
      const cv590 = v589;
      const cv596 = v596;
      
      v588 = cv588;
      v589 = cv589;
      v590 = cv590;
      v596 = cv596;
      
      continue;
      }
    else {
      const {data: [v640], secs: v642, time: v641, didSend: v219, from: v639 } = txn3;
      switch (v640[0]) {
        case 'Buyer_optIn0_59': {
          const v643 = v640[1];
          undefined /* setApiDetails */;
          ;
          await txn3.getOutput('Buyer_optIn', 'v564', ctc4, v564);
          const cv588 = v588;
          const cv589 = v641;
          const cv590 = v589;
          const cv596 = v596;
          
          v588 = cv588;
          v589 = cv589;
          v590 = cv590;
          v596 = cv596;
          
          continue;
          break;
          }
        case 'Buyer_submitBid0_59': {
          const v683 = v640[1];
          undefined /* setApiDetails */;
          const v689 = v683[stdlib.checkedBigNumberify('./index.rsh:70:12:spread', stdlib.UInt_max, '0')];
          const v690 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v639), null);
          const v691 = {
            None: 0,
            Some: 1
            }[v690[0]];
          const v692 = stdlib.eq(v691, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v693 = v692 ? false : true;
          stdlib.assert(v693, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:71:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:70:36:application call to [unknown function] (defined at: ./index.rsh:70:36:function exp)', 'at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:70:36:function exp)', 'at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
            msg: 'You already submitted your bid',
            who: 'Auctioneer'
            });
          const v696 = stdlib.add(v596, v689);
          ;
          const v712 = true;
          await txn3.getOutput('Buyer_submitBid', 'v712', ctc9, v712);
          await stdlib.mapSet(map0, v639, v689);
          await stdlib.mapSet(map1, v639, null);
          stdlib.protect(ctc0, await interact.seeBid(v639, v689), {
            at: './index.rsh:76:40:application',
            fs: ['at ./index.rsh:76:40:application call to [unknown function] (defined at: ./index.rsh:76:40:function exp)', 'at ./index.rsh:76:40:application call to "liftedInteract" (defined at: ./index.rsh:76:40:application)', 'at ./index.rsh:72:28:application call to [unknown function] (defined at: ./index.rsh:72:28:function exp)'],
            msg: 'seeBid',
            who: 'Auctioneer'
            });
          
          const v721 = stdlib.safeAdd(v588, stdlib.checkedBigNumberify('./index.rsh:77:32:decimal', stdlib.UInt_max, '1'));
          const cv588 = v721;
          const cv589 = v641;
          const cv590 = v589;
          const cv596 = v696;
          
          v588 = cv588;
          v589 = cv589;
          v590 = cv590;
          v596 = cv596;
          
          continue;
          break;
          }
        }}
    
    }
  stdlib.protect(ctc0, await interact.winnerReady(), {
    at: './index.rsh:87:38:application',
    fs: ['at ./index.rsh:87:38:application call to [unknown function] (defined at: ./index.rsh:87:38:function exp)', 'at ./index.rsh:87:38:application call to "liftedInteract" (defined at: ./index.rsh:87:38:application)'],
    msg: 'winnerReady',
    who: 'Auctioneer'
    });
  
  const v732 = stdlib.safeAdd(v590, v565);
  let v733 = stdlib.checkedBigNumberify('./index.rsh:90:35:decimal', stdlib.UInt_max, '0');
  let v734 = stdlib.checkedBigNumberify('./index.rsh:90:22:decimal', stdlib.UInt_max, '0');
  let v735 = v563;
  let v736 = v589;
  let v737 = v590;
  let v743 = v596;
  
  while (await (async () => {
    const v748 = stdlib.le(v737, v732);
    
    return v748;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc6],
      timeoutAt: ['time', v732],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v563, v564, v732, v733, v734, v735, v736, v743],
        evt_cnt: 0,
        funcNum: 6,
        lct: v736,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:116:17:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v811, time: v810, didSend: v472, from: v809 } = txn4;
          
          ;
          
          const cv733 = v733;
          const cv734 = v734;
          const cv735 = v735;
          const cv736 = v810;
          const cv737 = v736;
          const cv743 = v743;
          
          await (async () => {
            const v733 = cv733;
            const v734 = cv734;
            const v735 = cv735;
            const v736 = cv736;
            const v737 = cv737;
            const v743 = cv743;
            
            if (await (async () => {
              const v748 = stdlib.le(v737, v732);
              
              return v748;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v735,
                tok: v564
                });
              sim_r.txns.push({
                kind: 'from',
                to: v563,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc10, ctc4, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v811, time: v810, didSend: v472, from: v809 } = txn4;
      ;
      const v812 = stdlib.addressEq(v563, v809);
      stdlib.assert(v812, {
        at: './index.rsh:116:17:dot',
        fs: ['at ./index.rsh:115:38:application call to [unknown function] (defined at: ./index.rsh:115:38:function exp)'],
        msg: 'sender correct',
        who: 'Auctioneer'
        });
      stdlib.protect(ctc0, await interact.claimTimeout(), {
        at: './index.rsh:117:42:application',
        fs: ['at ./index.rsh:117:42:application call to [unknown function] (defined at: ./index.rsh:117:42:function exp)', 'at ./index.rsh:117:42:application call to "liftedInteract" (defined at: ./index.rsh:117:42:application)', 'at ./index.rsh:115:38:application call to [unknown function] (defined at: ./index.rsh:115:38:function exp)'],
        msg: 'claimTimeout',
        who: 'Auctioneer'
        });
      
      const cv733 = v733;
      const cv734 = v734;
      const cv735 = v735;
      const cv736 = v810;
      const cv737 = v736;
      const cv743 = v743;
      
      v733 = cv733;
      v734 = cv734;
      v735 = cv735;
      v736 = cv736;
      v737 = cv737;
      v743 = cv743;
      
      continue;
      }
    else {
      const {data: [v767], secs: v769, time: v768, didSend: v413, from: v766 } = txn3;
      undefined /* setApiDetails */;
      const v771 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v766), null);
      const v772 = {
        None: 0,
        Some: 1
        }[v771[0]];
      const v773 = stdlib.eq(v772, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v773, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:96:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:95:33:application call to [unknown function] (defined at: ./index.rsh:95:33:function exp)', 'at ./index.rsh:95:33:application call to [unknown function] (defined at: ./index.rsh:95:33:function exp)'],
        msg: 'You are not eligible to claim item',
        who: 'Auctioneer'
        });
      ;
      const v779 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v766), null);
      const v780 = stdlib.fromSome(v779, stdlib.checkedBigNumberify('./index.rsh:98:50:decimal', stdlib.UInt_max, '0'));
      const v781 = stdlib.gt(v780, v734);
      const v782 = v781 ? v766 : v563;
      const v784 = v781 ? v780 : v734;
      const v786 = stdlib.ge(v743, v780);
      if (v786) {
        const v790 = stdlib.sub(v743, v780);
        ;
        const v792 = v781;
        await txn3.getOutput('Buyer_claimItem', 'v792', ctc9, v792);
        const v798 = stdlib.safeAdd(v733, stdlib.checkedBigNumberify('./index.rsh:111:46:decimal', stdlib.UInt_max, '1'));
        const cv733 = v798;
        const cv734 = v784;
        const cv735 = v782;
        const cv736 = v768;
        const cv737 = v736;
        const cv743 = v790;
        
        v733 = cv733;
        v734 = cv734;
        v735 = cv735;
        v736 = cv736;
        v737 = cv737;
        v743 = cv743;
        
        continue;}
      else {
        const v801 = v781;
        await txn3.getOutput('Buyer_claimItem', 'v801', ctc9, v801);
        const v807 = stdlib.safeAdd(v733, stdlib.checkedBigNumberify('./index.rsh:111:46:decimal', stdlib.UInt_max, '1'));
        const cv733 = v807;
        const cv734 = v784;
        const cv735 = v782;
        const cv736 = v768;
        const cv737 = v736;
        const cv743 = v743;
        
        v733 = cv733;
        v734 = cv734;
        v735 = cv735;
        v736 = cv736;
        v737 = cv737;
        v743 = cv743;
        
        continue;}}
    
    }
  ;
  ;
  stdlib.protect(ctc0, await interact.seeWinner(v735, v734), {
    at: './index.rsh:124:37:application',
    fs: ['at ./index.rsh:124:37:application call to [unknown function] (defined at: ./index.rsh:124:37:function exp)', 'at ./index.rsh:124:37:application call to "liftedInteract" (defined at: ./index.rsh:124:37:application)'],
    msg: 'seeWinner',
    who: 'Auctioneer'
    });
  
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc6],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v835], secs: v837, time: v836, didSend: v500, from: v834 } = txn3;
  undefined /* setApiDetails */;
  ;
  const v838 = [v735, v734];
  await txn3.getOutput('Buyer_showHighestBidder', 'v838', ctc11, v838);
  return;
  
  
  
  
  
  
  };
export async function _Buyer_claimItem6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Buyer_claimItem6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Buyer_claimItem6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v563, v564, v732, v733, v734, v735, v736, v743] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc4, ctc5, ctc1, ctc1, ctc1, ctc4, ctc1, ctc1]);
  const v753 = ctc.selfAddress();
  const v755 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:95:33:application call to [unknown function] (defined at: ./index.rsh:95:33:function exp)', 'at ./index.rsh:95:33:application call to [unknown function] (defined at: ./index.rsh:95:33:function exp)'],
    msg: 'in',
    who: 'Buyer_claimItem'
    });
  const v756 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v753), null);
  const v757 = {
    None: 0,
    Some: 1
    }[v756[0]];
  const v758 = stdlib.eq(v757, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v758, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:96:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:95:33:application call to [unknown function] (defined at: ./index.rsh:95:33:function exp)', 'at ./index.rsh:95:33:application call to [unknown function] (defined at: ./index.rsh:95:33:function exp)'],
    msg: 'You are not eligible to claim item',
    who: 'Buyer_claimItem'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v563, v564, v732, v733, v734, v735, v736, v743, v755],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:97:19:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v767], secs: v769, time: v768, didSend: v413, from: v766 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Buyer_claimItem"
        });
      stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v766), null);
      ;
      const v779 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v766), null);
      const v780 = stdlib.fromSome(v779, stdlib.checkedBigNumberify('./index.rsh:98:50:decimal', stdlib.UInt_max, '0'));
      const v781 = stdlib.gt(v780, v734);
      const v782 = v781 ? v766 : v563;
      const v784 = v781 ? v780 : v734;
      const v786 = stdlib.ge(v743, v780);
      if (v786) {
        const v790 = stdlib.sub(v743, v780);
        sim_r.txns.push({
          kind: 'from',
          to: v766,
          tok: undefined /* Nothing */
          });
        const v792 = v781;
        const v793 = await txn1.getOutput('Buyer_claimItem', 'v792', ctc7, v792);
        
        const v798 = stdlib.safeAdd(v733, stdlib.checkedBigNumberify('./index.rsh:111:46:decimal', stdlib.UInt_max, '1'));
        const v1248 = v798;
        const v1249 = v784;
        const v1250 = v782;
        const v1251 = v768;
        const v1253 = v790;
        const v1254 = stdlib.le(v736, v732);
        if (v1254) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v782,
            tok: v564
            });
          sim_r.txns.push({
            kind: 'from',
            to: v563,
            tok: undefined /* Nothing */
            });
          sim_r.isHalt = false;
          }}
      else {
        const v801 = v781;
        const v802 = await txn1.getOutput('Buyer_claimItem', 'v801', ctc7, v801);
        
        const v807 = stdlib.safeAdd(v733, stdlib.checkedBigNumberify('./index.rsh:111:46:decimal', stdlib.UInt_max, '1'));
        const v1262 = v807;
        const v1263 = v784;
        const v1264 = v782;
        const v1265 = v768;
        const v1267 = v743;
        const v1268 = stdlib.le(v736, v732);
        if (v1268) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v782,
            tok: v564
            });
          sim_r.txns.push({
            kind: 'from',
            to: v563,
            tok: undefined /* Nothing */
            });
          sim_r.isHalt = false;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc1, ctc4, ctc1, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v767], secs: v769, time: v768, didSend: v413, from: v766 } = txn1;
  undefined /* setApiDetails */;
  const v771 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v766), null);
  const v772 = {
    None: 0,
    Some: 1
    }[v771[0]];
  const v773 = stdlib.eq(v772, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v773, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:96:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:95:33:application call to [unknown function] (defined at: ./index.rsh:95:33:function exp)', 'at ./index.rsh:95:33:application call to [unknown function] (defined at: ./index.rsh:95:33:function exp)'],
    msg: 'You are not eligible to claim item',
    who: 'Buyer_claimItem'
    });
  ;
  const v779 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v766), null);
  const v780 = stdlib.fromSome(v779, stdlib.checkedBigNumberify('./index.rsh:98:50:decimal', stdlib.UInt_max, '0'));
  const v781 = stdlib.gt(v780, v734);
  const v782 = v781 ? v766 : v563;
  const v784 = v781 ? v780 : v734;
  const v786 = stdlib.ge(v743, v780);
  if (v786) {
    const v790 = stdlib.sub(v743, v780);
    ;
    const v792 = v781;
    const v793 = await txn1.getOutput('Buyer_claimItem', 'v792', ctc7, v792);
    if (v413) {
      stdlib.protect(ctc0, await interact.out(v767, v793), {
        at: './index.rsh:95:13:application',
        fs: ['at ./index.rsh:95:13:application call to [unknown function] (defined at: ./index.rsh:95:13:function exp)', 'at ./index.rsh:108:15:application call to "k" (defined at: ./index.rsh:97:26:function exp)', 'at ./index.rsh:97:26:application call to [unknown function] (defined at: ./index.rsh:97:26:function exp)'],
        msg: 'out',
        who: 'Buyer_claimItem'
        });
      }
    else {
      }
    
    const v798 = stdlib.safeAdd(v733, stdlib.checkedBigNumberify('./index.rsh:111:46:decimal', stdlib.UInt_max, '1'));
    const v1248 = v798;
    const v1249 = v784;
    const v1250 = v782;
    const v1251 = v768;
    const v1253 = v790;
    const v1254 = stdlib.le(v736, v732);
    if (v1254) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  else {
    const v801 = v781;
    const v802 = await txn1.getOutput('Buyer_claimItem', 'v801', ctc7, v801);
    if (v413) {
      stdlib.protect(ctc0, await interact.out(v767, v802), {
        at: './index.rsh:95:13:application',
        fs: ['at ./index.rsh:95:13:application call to [unknown function] (defined at: ./index.rsh:95:13:function exp)', 'at ./index.rsh:108:15:application call to "k" (defined at: ./index.rsh:97:26:function exp)', 'at ./index.rsh:97:26:application call to [unknown function] (defined at: ./index.rsh:97:26:function exp)'],
        msg: 'out',
        who: 'Buyer_claimItem'
        });
      }
    else {
      }
    
    const v807 = stdlib.safeAdd(v733, stdlib.checkedBigNumberify('./index.rsh:111:46:decimal', stdlib.UInt_max, '1'));
    const v1262 = v807;
    const v1263 = v784;
    const v1264 = v782;
    const v1265 = v768;
    const v1267 = v743;
    const v1268 = stdlib.le(v736, v732);
    if (v1268) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  
  
  };
export async function _Buyer_optIn7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Buyer_optIn7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Buyer_optIn7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Data({
    Buyer_optIn0_59: ctc6,
    Buyer_submitBid0_59: ctc7
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v563, v564, v565, v587, v588, v589, v596] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc4, ctc5, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v608 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:63:29:application call to [unknown function] (defined at: ./index.rsh:63:29:function exp)', 'at ./index.rsh:60:17:application call to "runBuyer_optIn0_59" (defined at: ./index.rsh:63:12:function exp)', 'at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
    msg: 'in',
    who: 'Buyer_optIn'
    });
  const v612 = ['Buyer_optIn0_59', v608];
  
  const txn1 = await (ctc.sendrecv({
    args: [v563, v564, v565, v587, v588, v589, v596, v612],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:64:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v640], secs: v642, time: v641, didSend: v219, from: v639 } = txn1;
      
      switch (v640[0]) {
        case 'Buyer_optIn0_59': {
          const v643 = v640[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Buyer_optIn"
            });
          ;
          const v658 = await txn1.getOutput('Buyer_optIn', 'v564', ctc5, v564);
          
          const v1276 = v588;
          const v1277 = v641;
          const v1279 = v596;
          const v1280 = stdlib.le(v589, v587);
          if (v1280) {
            sim_r.isHalt = false;
            }
          else {
            const v1281 = stdlib.safeAdd(v589, v565);
            const v1322 = stdlib.checkedBigNumberify('./index.rsh:90:35:decimal', stdlib.UInt_max, '0');
            const v1323 = stdlib.checkedBigNumberify('./index.rsh:90:22:decimal', stdlib.UInt_max, '0');
            const v1324 = v563;
            const v1325 = v641;
            const v1327 = v596;
            const v1328 = stdlib.le(v589, v1281);
            if (v1328) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v563,
                tok: v564
                });
              sim_r.txns.push({
                kind: 'from',
                to: v563,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'Buyer_submitBid0_59': {
          const v683 = v640[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc1, ctc1, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v640], secs: v642, time: v641, didSend: v219, from: v639 } = txn1;
  switch (v640[0]) {
    case 'Buyer_optIn0_59': {
      const v643 = v640[1];
      undefined /* setApiDetails */;
      ;
      const v658 = await txn1.getOutput('Buyer_optIn', 'v564', ctc5, v564);
      if (v219) {
        stdlib.protect(ctc0, await interact.out(v643, v658), {
          at: './index.rsh:63:13:application',
          fs: ['at ./index.rsh:63:13:application call to [unknown function] (defined at: ./index.rsh:63:13:function exp)', 'at ./index.rsh:65:12:application call to "k" (defined at: ./index.rsh:64:24:function exp)', 'at ./index.rsh:64:24:application call to [unknown function] (defined at: ./index.rsh:64:24:function exp)'],
          msg: 'out',
          who: 'Buyer_optIn'
          });
        }
      else {
        }
      
      const v1276 = v588;
      const v1277 = v641;
      const v1279 = v596;
      const v1280 = stdlib.le(v589, v587);
      if (v1280) {
        return;
        }
      else {
        const v1281 = stdlib.safeAdd(v589, v565);
        const v1322 = stdlib.checkedBigNumberify('./index.rsh:90:35:decimal', stdlib.UInt_max, '0');
        const v1323 = stdlib.checkedBigNumberify('./index.rsh:90:22:decimal', stdlib.UInt_max, '0');
        const v1324 = v563;
        const v1325 = v641;
        const v1327 = v596;
        const v1328 = stdlib.le(v589, v1281);
        if (v1328) {
          return;
          }
        else {
          ;
          ;
          return;
          }}
      break;
      }
    case 'Buyer_submitBid0_59': {
      const v683 = v640[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Buyer_showHighestBidder4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Buyer_showHighestBidder4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Buyer_showHighestBidder4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc4, ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v563, v564, v734, v735] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc1, ctc4]);
  const v833 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:125:8:application',
    fs: ['at ./index.rsh:125:8:application call to [unknown function] (defined at: ./index.rsh:125:8:function exp)'],
    msg: 'in',
    who: 'Buyer_showHighestBidder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v563, v564, v734, v735, v833],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:125:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v835], secs: v837, time: v836, didSend: v500, from: v834 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Buyer_showHighestBidder"
        });
      ;
      const v838 = [v735, v734];
      const v839 = await txn1.getOutput('Buyer_showHighestBidder', 'v838', ctc7, v838);
      
      sim_r.txns.push({
        kind: 'halt',
        tok: v564
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc4, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v835], secs: v837, time: v836, didSend: v500, from: v834 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v838 = [v735, v734];
  const v839 = await txn1.getOutput('Buyer_showHighestBidder', 'v838', ctc7, v838);
  stdlib.protect(ctc0, await interact.out(v835, v839), {
    at: './index.rsh:125:8:application',
    fs: ['at ./index.rsh:125:8:application call to [unknown function] (defined at: ./index.rsh:125:8:function exp)', 'at ./index.rsh:126:11:application call to "k" (defined at: ./index.rsh:125:8:function exp)'],
    msg: 'out',
    who: 'Buyer_showHighestBidder'
    });
  
  return;
  
  
  
  };
export async function _Buyer_submitBid7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Buyer_submitBid7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Buyer_submitBid7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Buyer_optIn0_59: ctc7,
    Buyer_submitBid0_59: ctc6
    });
  const ctc9 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v563, v564, v565, v587, v588, v589, v596] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc4, ctc5, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v614 = ctc.selfAddress();
  const v616 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:70:36:application call to [unknown function] (defined at: ./index.rsh:70:36:function exp)', 'at ./index.rsh:60:17:application call to "runBuyer_submitBid0_59" (defined at: ./index.rsh:70:12:function exp)', 'at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
    msg: 'in',
    who: 'Buyer_submitBid'
    });
  const v617 = v616[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v619 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v614), null);
  const v620 = {
    None: 0,
    Some: 1
    }[v619[0]];
  const v621 = stdlib.eq(v620, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v622 = v621 ? false : true;
  stdlib.assert(v622, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:71:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:70:36:application call to [unknown function] (defined at: ./index.rsh:70:36:function exp)', 'at ./index.rsh:60:17:application call to "runBuyer_submitBid0_59" (defined at: ./index.rsh:70:12:function exp)', 'at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
    msg: 'You already submitted your bid',
    who: 'Buyer_submitBid'
    });
  const v629 = ['Buyer_submitBid0_59', v616];
  
  const txn1 = await (ctc.sendrecv({
    args: [v563, v564, v565, v587, v588, v589, v596, v629],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v617, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v640], secs: v642, time: v641, didSend: v219, from: v639 } = txn1;
      
      switch (v640[0]) {
        case 'Buyer_optIn0_59': {
          const v643 = v640[1];
          
          break;
          }
        case 'Buyer_submitBid0_59': {
          const v683 = v640[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Buyer_submitBid"
            });
          const v689 = v683[stdlib.checkedBigNumberify('./index.rsh:70:12:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v639), null);
          const v696 = stdlib.add(v596, v689);
          sim_r.txns.push({
            amt: v689,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v712 = true;
          const v713 = await txn1.getOutput('Buyer_submitBid', 'v712', ctc9, v712);
          
          await stdlib.simMapSet(sim_r, 0, v639, v689);
          await stdlib.simMapSet(sim_r, 1, v639, null);
          const v721 = stdlib.safeAdd(v588, stdlib.checkedBigNumberify('./index.rsh:77:32:decimal', stdlib.UInt_max, '1'));
          const v1456 = v721;
          const v1457 = v641;
          const v1459 = v696;
          const v1460 = stdlib.le(v589, v587);
          if (v1460) {
            sim_r.isHalt = false;
            }
          else {
            const v1461 = stdlib.safeAdd(v589, v565);
            const v1502 = stdlib.checkedBigNumberify('./index.rsh:90:35:decimal', stdlib.UInt_max, '0');
            const v1503 = stdlib.checkedBigNumberify('./index.rsh:90:22:decimal', stdlib.UInt_max, '0');
            const v1504 = v563;
            const v1505 = v641;
            const v1507 = v696;
            const v1508 = stdlib.le(v589, v1461);
            if (v1508) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v563,
                tok: v564
                });
              sim_r.txns.push({
                kind: 'from',
                to: v563,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc1, ctc1, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v640], secs: v642, time: v641, didSend: v219, from: v639 } = txn1;
  switch (v640[0]) {
    case 'Buyer_optIn0_59': {
      const v643 = v640[1];
      return;
      break;
      }
    case 'Buyer_submitBid0_59': {
      const v683 = v640[1];
      undefined /* setApiDetails */;
      const v689 = v683[stdlib.checkedBigNumberify('./index.rsh:70:12:spread', stdlib.UInt_max, '0')];
      const v690 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v639), null);
      const v691 = {
        None: 0,
        Some: 1
        }[v690[0]];
      const v692 = stdlib.eq(v691, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v693 = v692 ? false : true;
      stdlib.assert(v693, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:71:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:70:36:application call to [unknown function] (defined at: ./index.rsh:70:36:function exp)', 'at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:70:36:function exp)', 'at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
        msg: 'You already submitted your bid',
        who: 'Buyer_submitBid'
        });
      const v696 = stdlib.add(v596, v689);
      ;
      const v712 = true;
      const v713 = await txn1.getOutput('Buyer_submitBid', 'v712', ctc9, v712);
      if (v219) {
        stdlib.protect(ctc0, await interact.out(v683, v713), {
          at: './index.rsh:70:13:application',
          fs: ['at ./index.rsh:70:13:application call to [unknown function] (defined at: ./index.rsh:70:13:function exp)', 'at ./index.rsh:73:15:application call to "k" (defined at: ./index.rsh:72:28:function exp)', 'at ./index.rsh:72:28:application call to [unknown function] (defined at: ./index.rsh:72:28:function exp)'],
          msg: 'out',
          who: 'Buyer_submitBid'
          });
        }
      else {
        }
      
      await stdlib.mapSet(map0, v639, v689);
      await stdlib.mapSet(map1, v639, null);
      const v721 = stdlib.safeAdd(v588, stdlib.checkedBigNumberify('./index.rsh:77:32:decimal', stdlib.UInt_max, '1'));
      const v1456 = v721;
      const v1457 = v641;
      const v1459 = v696;
      const v1460 = stdlib.le(v589, v587);
      if (v1460) {
        return;
        }
      else {
        const v1461 = stdlib.safeAdd(v589, v565);
        const v1502 = stdlib.checkedBigNumberify('./index.rsh:90:35:decimal', stdlib.UInt_max, '0');
        const v1503 = stdlib.checkedBigNumberify('./index.rsh:90:22:decimal', stdlib.UInt_max, '0');
        const v1504 = v563;
        const v1505 = v641;
        const v1507 = v696;
        const v1508 = stdlib.le(v589, v1461);
        if (v1508) {
          return;
          }
        else {
          ;
          ;
          return;
          }}
      break;
      }
    }
  
  
  };
export async function Buyer_claimItem(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer_claimItem expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer_claimItem expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Buyer_claimItem6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Buyer_optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer_optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer_optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Buyer_optIn7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Buyer_showHighestBidder(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer_showHighestBidder expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer_showHighestBidder expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Buyer_showHighestBidder4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Buyer_submitBid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer_submitBid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer_submitBid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Buyer_submitBid7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Buyer_claimItem()byte`, `Buyer_optIn()uint64`, `Buyer_showHighestBidder()(address,uint64)`, `Buyer_submitBid(uint64)byte`],
    pure: [`NFT_owner()address`],
    sigs: [`Buyer_claimItem()byte`, `Buyer_optIn()uint64`, `Buyer_showHighestBidder()(address,uint64)`, `Buyer_submitBid(uint64)byte`, `NFT_owner()address`]
    },
  appApproval: `BiAVAAEEByAIBjAoOAqMlbrOBoXjovcIiuO9jQ/MruTpBAVASGBooI0GJgMBAAABASI1ADEYQQYKKWRJIls1ASEFWzUCMRkjEkEACjEAKCEKr2ZCBdY2GgAXSUEAriI1BCM1BkkhCwxAAHVJIQwMQABmSSENDEAAVyENEkQ0AUkhBgxAACRJJQxAABAlEkQoZEk1A1cAIDUHQgWfSChkSTUDVwAgNQdCBZFJJAxAABAkEkQoZEk1A1cAIDUHQgV7IxJEKGRJNQNXACA1B0IFayEMEkQpQgH8IQsSRClCAwpJIQ4MQAAQIQ4SRDYaATX/KjT/UEIAkIGJ8OBnEkQpNf8oNP9QIQWvUEIAezYaAhc1BDYaAzYaARdJIQ8MQAK9SSUMQAFKSSEFDEAAWSEFEkQlNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hB1s1/oAEF/zbLrAyBjT+D0Q0/zEAEkQ0/zQDIQRbNAMhCFs0/jQDIQlbMgY0AyEQWzQDIRFbQgOHSCU0ARJENARJIhJMNAISEUQoZEk1A0lKSklXACA1/yEEWzX+IQhbNf0hB1s1/CEJWzX7IRBbNfohEVs1+Uk1BTX4gAR3Yn7vNPhQsDIGNPwMRDT4IlVAACeACAAAAAAAAAI0NP4WULA0/hY1BzT/NP40/TT8NPsyBjT6NPlCAwc0+FcBCDX3NPcXNfYxAIgESlcJASJVIxNENPaIBEyACQAAAAAAAALIAbAqNQcxACgxAIgEJio09hZQNfVXCQE09UxQZjEAKDEAiAQPI4EJTFZmNP80/jT9NPw0+yMIMgY0+jT5NPYIQgKdSSEGDEAAXEghBjQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQhbNf6ABGG0rAywMgY0/g9ENP8xABJENP80AyEEWzT+NAMhB1s0AyEJWzQDV0AgMgY0AyESWzQDIRNbQgKUSCEGNAESRDQESSISTDQCEhFEKGRJNQNJSkpJVwAgNf8hBFs1/iEIWzX9IQdbNfwhCVs1+yESWzX6IRNbNflJNQU1+IAEaJJkYzT4ULAyBjT9DEQxAIgDNlcJASJVIxJEIjEAiAMoVwAJSTX2I1s09iJVTUk19zT7DTX2NP8xADT2TTX1NPs09zT2TTX0NPk09w9BAESxIrIBNPeyCCOyEDEAsgezgAgAAAAAAAADGDT2FlEHCFCwNPYWUQcINQc0/zT+NP00/CMINPQ09TIGNPo0+TT3CUIBu4AIAAAAAAAAAyE09hZRBwhQsDT2FlEHCDUHNP80/jT9NPwjCDT0NPUyBjT6NPlCAYpJIwxAAMBJJAxAAGVIJDQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AE1OAYLTT/ULCACAAAAAAAAANGNANXMCA0A1coCFBQsDQDVzAgNANXKAhQNQexIrIBIrISJLIQMgmyFTIKshQ0AyEEW7IRs0IBpSMSRCM0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hBFs1/iEIWzX9IQdbNfyABJqLkXSwIzT+iAH/NP8xABJENP80/jT9NPw0/QgiMgY0/CJCAGpIIRSIAcciNAESRDQESSISTDQCEhFESTUFSSJbNf8hBVs1/oAErNEfwzT/FlA0/hZQsCEUiAGWsSKyASKyEiSyEDIKshQ0/7IRszEANP8WUDT+FlAyBhZQKEsBVwA4Z0gjNQEyBjUCQgECNf81/jX9Nfw1+zX6Nfk1+DT+NPsOQQAsNPg0+RZQNPoWUDT7FlA0/BZQNP0WUDT/FlAoSwFXAFBnSCU1ATIGNQJCAL40+DT5NP40+ggiIjT4NP00/jT/QgAANf81/jX9Nfw1+zX6Nfk1+DX3NP40+Q5BADA09zT4FlA0+RZQNPoWUDT7FlA0/FA0/RZQNP8WUChLAVcAcGdIIQY1ATIGNQJCAF6xIrIBI7ISJLIQNPyyFDT4shGzsSKyATT/sggjshA097IHszT3NPgWUDT7FlA0/FAoSwFXAFBnSCQ1ATIGNQJCABwxGSEPEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAAVIIQqviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 10,
  stateKeys: 1,
  stateSize: 112,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v564",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v565",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v564",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v565",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v835",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v767",
                "type": "bool"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T23",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Buyer_optIn0_59",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T22",
                    "name": "_Buyer_submitBid0_59",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T23",
                "name": "v640",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v564",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v712",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v792",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v801",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v838",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Buyer_claimItem",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Buyer_optIn",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Buyer_showHighestBidder",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T17",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Buyer_submitBid",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "NFT_owner",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v835",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v767",
                "type": "bool"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T23",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Buyer_optIn0_59",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T22",
                    "name": "_Buyer_submitBid0_59",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T23",
                "name": "v640",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002be638038062002be6833981016040819052620000269162000238565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b0316838501520151606082015290517fcf195cf82603ce4a4e34c55fad8b41a7c2cc7f7728b1ba77a8eec293c0fa52d59181900360800190a1620000943415600862000131565b6040805160808082018352600060208084018281528486018381526060808701858152338089528a86018051516001600160a01b03908116875290518701518552438084526001988990559097558951808701919091529351909516838901529051908201529151828401528451808303909301835260a0909101909352805191926200012892600292909101906200015b565b505050620002ed565b81620001575760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200016990620002b0565b90600052602060002090601f0160209004810192826200018d5760008555620001d8565b82601f10620001a857805160ff1916838001178555620001d8565b82800160010185558215620001d8579182015b82811115620001d8578251825591602001919060010190620001bb565b50620001e6929150620001ea565b5090565b5b80821115620001e65760008155600101620001eb565b604080519081016001600160401b03811182821017156200023257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024c57600080fd5b6200025662000201565b835181526040601f19830112156200026d57600080fd5b6200027762000201565b60208501519092506001600160a01b03811681146200029557600080fd5b82526040939093015160208083019190915283015250919050565b600181811c90821680620002c557607f821691505b60208210811415620002e757634e487b7160e01b600052602260045260246000fd5b50919050565b6128e980620002fd6000396000f3fe6080604052600436106100eb5760003560e01c8063ab53f2c611610084578063cadc2e7a11610056578063cadc2e7a1461024d578063d9ab891f1461027a578063e4ae67d314610282578063e533a29d1461029557005b8063ab53f2c6146101e1578063ad9fa3d814610204578063c21b5ca814610217578063c79800371461023a57005b8063609e6cb5116100bd578063609e6cb5146101855780636a8cb8621461018d57806383230757146101b9578063a98bf223146101ce57005b80631e93b0f1146100f45780632c10a159146101185780633bc5b7bf1461012b5780635cf275dd1461015857005b366100f257005b005b34801561010057600080fd5b506003545b6040519081526020015b60405180910390f35b6100f2610126366004612167565b6102a8565b34801561013757600080fd5b5061014b610146366004612198565b6102cc565b60405161010f91906121e9565b34801561016457600080fd5b5061016d6102f8565b6040516001600160a01b03909116815260200161010f565b61016d61030a565b61019561033a565b6040805182516001600160a01b03168152602092830151928101929092520161010f565b3480156101c557600080fd5b50600154610105565b6100f26101dc366004612167565b61037b565b3480156101ed57600080fd5b506101f661039b565b60405161010f929190612245565b6100f2610212366004612167565b610438565b61022a61022536600461227f565b610458565b604051901515815260200161010f565b6100f2610248366004612167565b610493565b34801561025957600080fd5b5061026d610268366004612198565b6104b3565b60405161010f9190612298565b61022a6104d9565b6100f26102903660046122ca565b610505565b6100f26102a3366004612167565b610525565b6102b0611f04565b6102c86102c2368490038401846123b4565b82610545565b5050565b60408051606081018252600080825260208201819052918101919091526102f282610712565b92915050565b600080610304816107e5565b91505090565b6000610314611f42565b60208101515160009052610326611f04565b6103308282610aa7565b6020015192915050565b6040805180820190915260008082526020820152610356611f8c565b602081015160009052610367611f04565b6103718282610e44565b6040015192915050565b610383611f04565b6102c86103953684900384018461249b565b82610e44565b6000606060005460028080546103b0906124b7565b80601f01602080910402602001604051908101604052809291908181526020018280546103dc906124b7565b80156104295780601f106103fe57610100808354040283529160200191610429565b820191906000526020600020905b81548152906001019060200180831161040c57829003601f168201915b50505050509050915091509091565b610440611f04565b6102c86104523684900384018461249b565b82610ff8565b6000610462611f42565b602081018051516001905251516040015183905261047e611f04565b6104888282610aa7565b606001519392505050565b61049b611f04565b6102c86104ad368490038401846123b4565b826113ff565b60408051606081018252600080825260208201819052918101919091526102f2826115c7565b60006104e3611f8c565b6020810151600090526104f4611f04565b6104fe8282610ff8565b5192915050565b61050d611f04565b6102c861051f368490038401846124ec565b82610aa7565b61052d611f04565b6102c861053f368490038401846123b4565b82611690565b610555600160005414600c611846565b815161057090158061056957508251600154145b600d611846565b600080805560028054610582906124b7565b80601f01602080910402602001604051908101604052809291908181526020018280546105ae906124b7565b80156105fb5780601f106105d0576101008083540402835291602001916105fb565b820191906000526020600020905b8154815290600101906020018083116105de57829003601f168201915b5050505050806020019051810190610613919061259f565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133846040516106469291906125f6565b60405180910390a161065a34156009611846565b61067461066d338360200151600161186c565b600a611846565b805161068c906001600160a01b03163314600b611846565b610694611fb6565b815181516001600160a01b0391821690526020808401518351921691015260408083018051835190920191909152606083015190516106d39190611884565b81516060908101919091526020808301805160009081905281514393019290925284830151815160400152519091015261070c816118d1565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561075e5761075e6121b5565b14156107d5576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561079f5761079f6121b5565b60018111156107b0576107b06121b5565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b60006001600054141561089a57600060028054610801906124b7565b80601f016020809104026020016040519081016040528092919081815260200182805461082d906124b7565b801561087a5780601f1061084f5761010080835404028352916020019161087a565b820191906000526020600020905b81548152906001019060200180831161085d57829003601f168201915b5050505050806020019051810190610892919061259f565b519392505050565b60046000541415610945576000600280546108b4906124b7565b80601f01602080910402602001604051908101604052809291908181526020018280546108e0906124b7565b801561092d5780601f106109025761010080835404028352916020019161092d565b820191906000526020600020905b81548152906001019060200180831161091057829003601f168201915b5050505050806020019051810190610892919061261e565b600660005414156109f05760006002805461095f906124b7565b80601f016020809104026020016040519081016040528092919081815260200182805461098b906124b7565b80156109d85780601f106109ad576101008083540402835291602001916109d8565b820191906000526020600020905b8154815290600101906020018083116109bb57829003601f168201915b5050505050806020019051810190610892919061267c565b60076000541415610a9b57600060028054610a0a906124b7565b80601f0160208091040260200160405190810160405280929190818152602001828054610a36906124b7565b8015610a835780601f10610a5857610100808354040283529160200191610a83565b820191906000526020600020905b815481529060010190602001808311610a6657829003601f168201915b50505050508060200190518101906108929190612734565b6107e060006007611846565b610ab7600760005414601e611846565b8151610ad2901580610acb57508251600154145b601f611846565b600080805560028054610ae4906124b7565b80601f0160208091040260200160405190810160405280929190818152602001828054610b10906124b7565b8015610b5d5780601f10610b3257610100808354040283529160200191610b5d565b820191906000526020600020905b815481529060010190602001808311610b4057829003601f168201915b5050505050806020019051810190610b759190612734565b9050610b9260408051808201909152600060208201908152815290565b610ba3826060015143106020611846565b7f98f8dcc61c54566331d2722cb852666b9c9e039346c295e2d67af064a12e505b3385604051610bd49291906127d8565b60405180910390a16000602085015151516001811115610bf657610bf66121b5565b1415610cd957610c083415601b611846565b6020808301516040516001600160a01b0390911681527f5e275e84e34265f7622d70cab603a00839e074f8c05cafae7855046d90c8da49910160405180910390a16020808301516001600160a01b031690840152610c64611fb6565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201526060808601518451820152608086015183850180519190915280514394019390935260a086015183519092019190915260c085015191510152610cd3816118d1565b5061070c565b6001602085015151516001811115610cf357610cf36121b5565b141561070c57602084015151604001518152610d3b6001610d13336115c7565b516001811115610d2557610d256121b5565b14610d31576001610d34565b60005b601c611846565b805151610d4b903414601d611846565b604051600181527fc30653b7457077c3254d4d53cb2799abd1ae28d611ab8c3a613f16c7eb6f43539060200160405180910390a1600160608401819052336000908152600460209081526040808320805460ff1916851781558551519085015560059091529020805462ff00ff19169091179055610dc7611fb6565b825181516001600160a01b039182169052602080850151835192169101526040808401518251909101526060808401518251909101526080830151610e0d906001611884565b602082810180519290925281514391015260a084015190516040015260c083015182515101602082015160600152610cd3816118d1565b610e54600460005414600f611846565b8151610e6f901580610e6857508251600154145b6010611846565b600080805560028054610e81906124b7565b80601f0160208091040260200160405190810160405280929190818152602001828054610ead906124b7565b8015610efa5780601f10610ecf57610100808354040283529160200191610efa565b820191906000526020600020905b815481529060010190602001808311610edd57829003601f168201915b5050505050806020019051810190610f12919061261e565b9050610f34604080516060810182526000602082018181529282015290815290565b7f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b943385604051610f6592919061282a565b60405180910390a1610f793415600e611846565b606082015181516001600160a01b03918216905260408084015183516020908101919091528351825181519094168452810151908301527fc006cf393898a47b501ff478d5d7bf8dcda348e42ccc94fb0d5c4117889e8060910160405180910390a1805160408401526000808055600181905561070c90600290612011565b6110086006600054146013611846565b815161102390158061101c57508251600154145b6014611846565b600080805560028054611035906124b7565b80601f0160208091040260200160405190810160405280929190818152602001828054611061906124b7565b80156110ae5780601f10611083576101008083540402835291602001916110ae565b820191906000526020600020905b81548152906001019060200180831161109157829003601f168201915b50505050508060200190518101906110c6919061267c565b90506110fe60405180608001604052806000815260200160001515815260200160006001600160a01b03168152602001600081525090565b61110f826040015143106015611846565b7f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c21365338560405161114092919061282a565b60405180910390a16111706001611156336115c7565b516001811115611168576111686121b5565b146011611846565b61117c34156012611846565b600161118733610712565b516001811115611199576111996121b5565b146111a55760006111b3565b6111ae33610712565b604001515b808252608083015110602082018190526111ce5781516111d0565b335b6001600160a01b0316604082015260208101516111f15781608001516111f4565b80515b6060820152805160e083015110611319578051604051339180156108fc02916000818181858888f19350505050158015611232573d6000803e3d6000fd5b507f81454e1fe623eb7d76de014d5d05260afc7743f5dd4926deb76f2f84b3c9d4e6816020015160405161126a911515815260200190565b60405180910390a160208101511515835261128361204b565b825181516001600160a01b0391821690526020808501518351921691015260408084015182519091015260608301516112bd906001611884565b602082810180519290925260608481015183519092019190915260408085015183516001600160a01b0390911691015281514391015260c084015190516080015260e083015182519003602082015160a00152610cd381611acb565b7f54309a21f206af317613c4c7fb4540b1fc754abee7544f60e15369d7cba272268160200151604051611350911515815260200190565b60405180910390a160208101511515835261136961204b565b825181516001600160a01b0391821690526020808501518351921691015260408084015182519091015260608301516113a3906001611884565b602080830180519290925260608085015183519092019190915260408085015183516001600160a01b0390911691015281514391015260c084015181516080015260e0840151905160a001526113f881611acb565b5050505050565b61140f6006600054146018611846565b815161142a90158061142357508251600154145b6019611846565b60008080556002805461143c906124b7565b80601f0160208091040260200160405190810160405280929190818152602001828054611468906124b7565b80156114b55780601f1061148a576101008083540402835291602001916114b5565b820191906000526020600020905b81548152906001019060200180831161149857829003601f168201915b50505050508060200190518101906114cd919061267c565b90506114e18160400151431015601a611846565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae33846040516115129291906125f6565b60405180910390a161152634156016611846565b805161153e906001600160a01b031633146017611846565b61154661204b565b815181516001600160a01b039182169052602080840151835190831690820152604080850151845182015260608086015183860180519190915260808088015182519095019490945260a08088015182519616959093019490945283514391015260c085015183519092019190915260e08401519151015261070c81611acb565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115611613576116136121b5565b14156107d5576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115611654576116546121b5565b6001811115611665576116656121b5565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b6116a06007600054146023611846565b81516116bb9015806116b457508251600154145b6024611846565b6000808055600280546116cd906124b7565b80601f01602080910402602001604051908101604052809291908181526020018280546116f9906124b7565b80156117465780601f1061171b57610100808354040283529160200191611746565b820191906000526020600020905b81548152906001019060200180831161172957829003601f168201915b505050505080602001905181019061175e9190612734565b905061177281606001514310156025611846565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb6077633846040516117a39291906125f6565b60405180910390a16117b734156021611846565b80516117cf906001600160a01b031633146022611846565b6117d7611fb6565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183518201526060808501518451820152608085015183850180519190915280514394019390935260a085015183519092019190915260c08401519151015261070c816118d1565b816102c85760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600061187a83853085611d0a565b90505b9392505050565b6000826118918382612854565b91508110156102f25760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611863565b80516060015160208201516040015111611a1c576119376040518060e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b0390811682528251602090810151909116818301528251604090810151818401528351606090810151818501528285018051516080860152805184015160a086015251015160c0840152600760005543600155516119f39183910181516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b60405160208183030381529060405260029080519060200190611a179291906120b6565b505050565b611a2461204b565b81515181516001600160a01b03918216905282516020908101518351921691810191909152820151604090810151835190910151611a629190611884565b815160409081019190915260208083018051600090819052815183015284515181516001600160a01b03909116908401528482018051909201518151606090810191909152825190930151815160800152905190910151905160a001526102c881611acb565b50565b80516040015160208201516080015111611c2457611b4260405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015182168184015283516040908101518185015281850180515160608087019190915281518401516080870152815183015190941660a08087019190915281519094015160c0860152519092015160e084015260066000554360015590516119f39183910160006101008201905060018060a01b038084511683528060208501511660208401526040840151604084015260608401516060840152608084015160808401528060a08501511660a08401525060c083015160c083015260e083015160e083015292915050565b611c408160000151602001518260200151604001516001611de4565b805151602082015160a001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611c82573d6000803e3d6000fd5b5060408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b03908116808a528b51870151821686528b870180518801518652518b01518216835260049097554360015589519586019690965292518516978401979097525195820195909552935116908301529060a0016119f3565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611d719161287a565b60006040518083038185875af1925050503d8060008114611dae576040519150601f19603f3d011682016040523d82523d6000602084013e611db3565b606091505b5091509150611dc482826001611df8565b5080806020019051810190611dd99190612896565b979650505050505050565b611def838383611e33565b611a1757600080fd5b60608315611e0757508161187d565b825115611e175782518084602001fd5b60405163100960cb60e01b815260048101839052602401611863565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611e929161287a565b60006040518083038185875af1925050503d8060008114611ecf576040519150601f19603f3d011682016040523d82523d6000602084013e611ed4565b606091505b5091509150611ee582826002611df8565b5080806020019051810190611efa9190612896565b9695505050505050565b6040805160808101825260008082526020820152908101611f35604080518082019091526000808252602082015290565b8152600060209091015290565b604051806040016040528060008152602001611f8760408051608081018252600060208083018281528385018390528451918201909452908152606082015290815290565b905290565b604051806040016040528060008152602001611f8760405180602001604052806000151581525090565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001611f876040518060800160405280600081526020016000815260200160008152602001600081525090565b50805461201d906124b7565b6000825580601f1061202d575050565b601f016020900490600052602060002090810190611ac8919061213a565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001611f876040518060c00160405280600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8280546120c2906124b7565b90600052602060002090601f0160209004810192826120e4576000855561212a565b82601f106120fd57805160ff191683800117855561212a565b8280016001018555821561212a579182015b8281111561212a57825182559160200191906001019061210f565b5061213692915061213a565b5090565b5b80821115612136576000815560010161213b565b60006040828403121561216157600080fd5b50919050565b60006040828403121561217957600080fd5b61187d838361214f565b6001600160a01b0381168114611ac857600080fd5b6000602082840312156121aa57600080fd5b813561187d81612183565b634e487b7160e01b600052602160045260246000fd5b60028110611ac857634e487b7160e01b600052602160045260246000fd5b815160608201906121f9816121cb565b808352506020830151151560208301526040830151604083015292915050565b60005b8381101561223457818101518382015260200161221c565b8381111561070c5750506000910152565b828152604060208201526000825180604084015261226a816060850160208701612219565b601f01601f1916919091016060019392505050565b60006020828403121561229157600080fd5b5035919050565b815160608201906122a8816121cb565b8083525060208301511515602083015260408301511515604083015292915050565b60006080828403121561216157600080fd5b6040805190810167ffffffffffffffff8111828210171561230d57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561230d57634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561230d57634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff8111828210171561230d57634e487b7160e01b600052604160045260246000fd5b8015158114611ac857600080fd5b6000604082840312156123c657600080fd5b6040516040810181811067ffffffffffffffff821117156123f757634e487b7160e01b600052604160045260246000fd5b60405282358152602083013561240c816123a6565b60208201529392505050565b6000818303604081121561242b57600080fd5b6124336122dc565b8335815291506020601f198201121561244b57600080fd5b506040516020810181811067ffffffffffffffff8211171561247d57634e487b7160e01b600052604160045260246000fd5b604052602083013561248e816123a6565b8152602082015292915050565b6000604082840312156124ad57600080fd5b61187d8383612418565b600181811c908216806124cb57607f821691505b6020821081141561216157634e487b7160e01b600052602260045260246000fd5b600081830360808112156124ff57600080fd5b6125076122dc565b833581526060601f198301121561251d57600080fd5b612525612313565b61252d612344565b60208601356002811061253f57600080fd5b8152604086013561254f816123a6565b806020830152506020605f198501121561256857600080fd5b612570612313565b60609690960135865260408101959095529384526020810193909352509092915050565b80516107e081612183565b6000608082840312156125b157600080fd5b6125b9612375565b82516125c481612183565b815260208301516125d481612183565b6020820152604083810151908201526060928301519281019290925250919050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b60006080828403121561263057600080fd5b612638612375565b825161264381612183565b8152602083015161265381612183565b602082015260408381015190820152606083015161267081612183565b60608201529392505050565b600061010080838503121561269057600080fd5b6040519081019067ffffffffffffffff821181831017156126c157634e487b7160e01b600052604160045260246000fd5b81604052835191506126d282612183565b8181526126e160208501612594565b602082015260408401516040820152606084015160608201526080840151608082015261271060a08501612594565b60a082015260c084015160c082015260e084015160e0820152809250505092915050565b600060e0828403121561274657600080fd5b60405160e0810181811067ffffffffffffffff8211171561277757634e487b7160e01b600052604160045260246000fd5b604052825161278581612183565b8152602083015161279581612183565b8060208301525060408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b0383168152815160208083019190915282015151805160a083019190612804816121cb565b806040850152506020810151151560608401526040810151516080840152509392505050565b6001600160a01b03831681526060810161187d602083018480518252602090810151511515910152565b6000821982111561287557634e487b7160e01b600052601160045260246000fd5b500190565b6000825161288c818460208701612219565b9190910192915050565b6000602082840312156128a857600080fd5b815161187d816123a656fea2646970667358221220c2b0bfcccbd3c321f2620610c01d2a06856045085980fb25bbb82895d87a8eed64736f6c634300080c0033`,
  BytecodeLen: 11238,
  Which: `oD`,
  version: 8,
  views: {
    NFT: {
      owner: `NFT_owner`
      }
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:48:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:122:7:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:127:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:90:20:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:60:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Auctioneer": Auctioneer,
  "Buyer_claimItem": Buyer_claimItem,
  "Buyer_optIn": Buyer_optIn,
  "Buyer_showHighestBidder": Buyer_showHighestBidder,
  "Buyer_submitBid": Buyer_submitBid
  };
export const _APIs = {
  Buyer: {
    claimItem: Buyer_claimItem,
    optIn: Buyer_optIn,
    showHighestBidder: Buyer_showHighestBidder,
    submitBid: Buyer_submitBid
    }
  };
