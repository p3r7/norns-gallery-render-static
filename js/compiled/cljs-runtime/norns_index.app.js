goog.provide('norns_index.app');







norns_index.app.script_list = cljs.core.PersistentHashMap.fromArrays(["sines","drum_room","mouse","orca","passerby","sam","reels","molly_the_polly","uvf","drift","pedalboard","rudiments","yggrasil","gridstep","fretwork","hachi","takt","greyhole","timeparty","loom","euclydigons","ooooooo","lost_futures","awake","changes","timber_player","wrms","mlr","ortf","lissadron","cranes","barcode","flora","rpmate","step"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synth","synth",-862700847)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"midi_in","midi_in",249977396),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sample-player","sample-player",-2099372769)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"midi_in","midi_in",249977396),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequencer","sequencer",-207399296)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"kbd","kbd",316156875),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tracker","tracker",533009341)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"arc","arc",252411045),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"kbd","kbd",316156875),null,new cljs.core.Keyword(null,"grid_any","grid_any",1341013008),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synth","synth",-862700847)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null,new cljs.core.Keyword(null,"midi_in","midi_in",249977396),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler","sampler",2068889864)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"looper","looper",1284743936)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synth","synth",-862700847)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null,new cljs.core.Keyword(null,"midi_in","midi_in",249977396),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sample-player","sample-player",-2099372769)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequencer","sequencer",-207399296)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-effect","audio-effect",1793594060)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synth","synth",-862700847)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tracker","tracker",533009341)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"kbd","kbd",316156875),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequencer","sequencer",-207399296)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null,new cljs.core.Keyword(null,"grid_64","grid_64",-1814224330),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequencer","sequencer",-207399296)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synth","synth",-862700847)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequencer","sequencer",-207399296)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-effect","audio-effect",1793594060)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-effect","audio-effect",1793594060)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequencer","sequencer",-207399296)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_any","grid_any",1341013008),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequencer","sequencer",-207399296)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"looper","looper",1284743936)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synth","synth",-862700847)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"midi_in","midi_in",249977396),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequencer","sequencer",-207399296)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cc","cc",301258124)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sample-player","sample-player",-2099372769)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null,new cljs.core.Keyword(null,"midi_in","midi_in",249977396),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"looper","looper",1284743936)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"looper","looper",1284743936)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sample-player","sample-player",-2099372769)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synth","synth",-862700847)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"midi_in","midi_in",249977396),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"looper","looper",1284743936)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"looper","looper",1284743936)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequencer","sequencer",-207399296)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"util","util",-492628278)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequencer","sequencer",-207399296)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null], null), null)], null)]);
norns_index.app.script_categories = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sequencer","sequencer",-207399296),new cljs.core.Keyword(null,"looper","looper",1284743936),new cljs.core.Keyword(null,"midi-effect","midi-effect",-476138844),new cljs.core.Keyword(null,"sampler","sampler",2068889864),new cljs.core.Keyword(null,"util","util",-492628278),new cljs.core.Keyword(null,"cc","cc",301258124),new cljs.core.Keyword(null,"audio-effect","audio-effect",1793594060),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"granular","granular",-322546821),new cljs.core.Keyword(null,"tracker","tracker",533009341),new cljs.core.Keyword(null,"sample-player","sample-player",-2099372769)],["Sequencers","Loopers, Live Samplers & Crazy Delays","Midi Effets","Basic Samplers","Utilities","Control Modulation Sources","Audio Effets","Synths & Drones","Granular Processing","Trackers","Sample Players"]);
norns_index.app.script_categories_order = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"granular","granular",-322546821),new cljs.core.Keyword(null,"sample-player","sample-player",-2099372769),new cljs.core.Keyword(null,"sampler","sampler",2068889864),new cljs.core.Keyword(null,"sequencer","sequencer",-207399296),new cljs.core.Keyword(null,"tracker","tracker",533009341),new cljs.core.Keyword(null,"cc","cc",301258124),new cljs.core.Keyword(null,"audio-effect","audio-effect",1793594060),new cljs.core.Keyword(null,"looper","looper",1284743936),new cljs.core.Keyword(null,"midi-effect","midi-effect",-476138844),new cljs.core.Keyword(null,"util","util",-492628278)], null);
norns_index.app.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"txt","txt",626843688),""], null)], null));
/**
 * Main entry point.
 *   Called (only) on first page load.
 */
norns_index.app.init = (function norns_index$app$init(){
return (norns_index.app.mount_root.cljs$core$IFn$_invoke$arity$0 ? norns_index.app.mount_root.cljs$core$IFn$_invoke$arity$0() : norns_index.app.mount_root.call(null));
});
/**
 * Called (only) when code gets reloaded by shadow-cljs.
 */
norns_index.app.on_reload = (function norns_index$app$on_reload(){
(norns_index.app.mount_root.cljs$core$IFn$_invoke$arity$0 ? norns_index.app.mount_root.cljs$core$IFn$_invoke$arity$0() : norns_index.app.mount_root.call(null));

return console.debug("code reloaded by shadow-cljs");
});
/**
 * Mount transpilled js code into #app dome element.
 *   Gets called both at page load (`init`) and on automatic code reload by shadow-cljs (`on-reload`).
 */
norns_index.app.mount_root = (function norns_index$app$mount_root(){
var G__52623 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [norns_index.app.main_view], null);
return (norns_index.app.mount_app_element.cljs$core$IFn$_invoke$arity$1 ? norns_index.app.mount_app_element.cljs$core$IFn$_invoke$arity$1(G__52623) : norns_index.app.mount_app_element.call(null,G__52623));
});
/**
 * Mount and render hiccup COMPONENT on dom element EL.
 */
norns_index.app.mount = (function norns_index$app$mount(component,el){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(component,el);
});
/**
 * Mount hiccup COMPONENT on dom element #app.
 */
norns_index.app.mount_app_element = (function norns_index$app$mount_app_element(component){
var temp__5735__auto__ = (norns_index.app.app_element.cljs$core$IFn$_invoke$arity$0 ? norns_index.app.app_element.cljs$core$IFn$_invoke$arity$0() : norns_index.app.app_element.call(null));
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return norns_index.app.mount(component,el);
} else {
return null;
}
});
norns_index.app.app_element = (function norns_index$app$app_element(){
return goog.dom.getElement("app");
});
norns_index.app.simple_feature__GT_icon = (function norns_index$app$simple_feature__GT_icon(feature){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"midi_in","midi_in",249977396),"midi_i",new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),"midi_o",new cljs.core.Keyword(null,"audio_in","audio_in",79654211),"audio_i",new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),"audio_o",new cljs.core.Keyword(null,"grid_128","grid_128",313354669),"grid_128",new cljs.core.Keyword(null,"grid_any","grid_any",1341013008),"grid_any",new cljs.core.Keyword(null,"kbd","kbd",316156875),"kbd",new cljs.core.Keyword(null,"arc","arc",252411045),"arc"], null),feature);
});
norns_index.app.simple_feature__GT_icon_maybe = (function norns_index$app$simple_feature__GT_icon_maybe(search,features){
if(cljs.core.truth_(norns_index.utils.core.member_QMARK_(search,features))){
return norns_index.app.simple_feature__GT_icon(search);
} else {
return null;
}
});
norns_index.app.midi_feature__GT_icon_maybe = (function norns_index$app$midi_feature__GT_icon_maybe(features){
if(cljs.core.every_QMARK_((function (p1__52624_SHARP_){
return norns_index.utils.core.member_QMARK_(p1__52624_SHARP_,features);
}),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"midi_in","midi_in",249977396),null], null), null))){
return "midi_io";
} else {
if(cljs.core.truth_(norns_index.utils.core.member_QMARK_(new cljs.core.Keyword(null,"midi_in","midi_in",249977396),features))){
return norns_index.app.simple_feature__GT_icon(new cljs.core.Keyword(null,"midi_in","midi_in",249977396));
} else {
if(cljs.core.truth_(norns_index.utils.core.member_QMARK_(new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),features))){
return norns_index.app.simple_feature__GT_icon(new cljs.core.Keyword(null,"midi_out","midi_out",-689948896));
} else {
return null;
}
}
}
});
norns_index.app.audio_feature__GT_icon_maybe = (function norns_index$app$audio_feature__GT_icon_maybe(features){
if(cljs.core.every_QMARK_((function (p1__52625_SHARP_){
return norns_index.utils.core.member_QMARK_(p1__52625_SHARP_,features);
}),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null))){
return "audio_io";
} else {
if(cljs.core.truth_(norns_index.utils.core.member_QMARK_(new cljs.core.Keyword(null,"audio_in","audio_in",79654211),features))){
return norns_index.app.simple_feature__GT_icon(new cljs.core.Keyword(null,"audio_in","audio_in",79654211));
} else {
if(cljs.core.truth_(norns_index.utils.core.member_QMARK_(new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),features))){
return norns_index.app.simple_feature__GT_icon(new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459));
} else {
return null;
}
}
}
});
norns_index.app.grid_feature__GT_icon_maybe = (function norns_index$app$grid_feature__GT_icon_maybe(features){
if(cljs.core.truth_(norns_index.utils.core.member_QMARK_(new cljs.core.Keyword(null,"grid_any","grid_any",1341013008),features))){
return norns_index.app.simple_feature__GT_icon(new cljs.core.Keyword(null,"grid_any","grid_any",1341013008));
} else {
if(cljs.core.every_QMARK_((function (p1__52626_SHARP_){
return norns_index.utils.core.member_QMARK_(p1__52626_SHARP_,features);
}),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null,new cljs.core.Keyword(null,"grid_64","grid_64",-1814224330),null], null), null))){
return "grid_64-128";
} else {
if(cljs.core.truth_(norns_index.utils.core.member_QMARK_(new cljs.core.Keyword(null,"grid_128","grid_128",313354669),features))){
return norns_index.app.simple_feature__GT_icon(new cljs.core.Keyword(null,"grid_128","grid_128",313354669));
} else {
return null;
}
}
}
});
norns_index.app.norns_script_features__GT_icons = (function norns_index$app$norns_script_features__GT_icons(features){
return norns_index.utils.core.remove_nils(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52627_SHARP_){
return (p1__52627_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__52627_SHARP_.cljs$core$IFn$_invoke$arity$1(features) : p1__52627_SHARP_.call(null,features));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [norns_index.app.audio_feature__GT_icon_maybe,norns_index.app.midi_feature__GT_icon_maybe,norns_index.app.grid_feature__GT_icon_maybe,(function (p1__52628_SHARP_){
return norns_index.app.simple_feature__GT_icon_maybe(new cljs.core.Keyword(null,"kbd","kbd",316156875),p1__52628_SHARP_);
}),(function (p1__52629_SHARP_){
return norns_index.app.simple_feature__GT_icon_maybe(new cljs.core.Keyword(null,"arc","arc",252411045),p1__52629_SHARP_);
})], null)));
});
norns_index.app.main_view = (function norns_index$app$main_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-view","div.main-view",1657317201),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.script-category-section","div.script-category-section",1359929964),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Filter"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block","label.block",-427190023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.5em"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(norns_index.app.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"txt","txt",626843688)], null),e.target.value);
})], null)], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(norns_index.app.script_category_section,norns_index.app.script_categories_order))], null);
});
norns_index.app.script_category_section = (function norns_index$app$script_category_section(script_category){
var temp__5735__auto__ = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__52631){
var vec__52632 = p__52631;
var script_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52632,(0),null);
var script_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52632,(1),null);
var and__4115__auto__ = norns_index.utils.core.member_QMARK_(script_category,new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(script_props));
if(cljs.core.truth_(and__4115__auto__)){
return clojure.string.includes_QMARK_(script_name,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(norns_index.app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"txt","txt",626843688)], null)));
} else {
return and__4115__auto__;
}
}),norns_index.app.script_list))));
if(temp__5735__auto__){
var matched_scripts = temp__5735__auto__;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.script-category-section","div.script-category-section",1359929964),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.get.cljs$core$IFn$_invoke$arity$2(norns_index.app.script_categories,script_category)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-wrap.script-panels-container","div.flex.flex-wrap.script-panels-container",1106782400),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52630_SHARP_){
return (norns_index.app.script_panel.cljs$core$IFn$_invoke$arity$2 ? norns_index.app.script_panel.cljs$core$IFn$_invoke$arity$2(script_category,p1__52630_SHARP_) : norns_index.app.script_panel.call(null,script_category,p1__52630_SHARP_));
}),matched_scripts))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(script_category)], null));
} else {
return null;
}
});
norns_index.app.script_panel = (function norns_index$app$script_panel(script_category,script_name){
var features = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(norns_index.app.script_list,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [script_name,new cljs.core.Keyword(null,"features","features",-1146962336)], null));
var feature_icons = norns_index.app.norns_script_features__GT_icons(features);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.script-panel-container","div.script-panel-container",-768716847),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.script-panel","div.script-panel",-845314996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [norns_index.app.screenshot,script_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.script-title","p.script-title",-260636586),clojure.string.upper_case(script_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-wrap","div.flex.flex-wrap",-407942064),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52635_SHARP_){
return (norns_index.app.feature.cljs$core$IFn$_invoke$arity$3 ? norns_index.app.feature.cljs$core$IFn$_invoke$arity$3(p1__52635_SHARP_,script_category,script_name) : norns_index.app.feature.call(null,p1__52635_SHARP_,script_category,script_name));
}),feature_icons))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(script_category),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(script_name)].join('')], null));
});
norns_index.app.screenshot = (function norns_index$app$screenshot(script_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.norns-screenshot-container","div.norns-screenshot-container",-826271508),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.img-norns-screenshot","img.img-norns-screenshot",-387766176),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),["img/screenshot/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(script_name),".png"].join('')], null)], null)], null);
});
norns_index.app.feature = (function norns_index$app$feature(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52642 = arguments.length;
var i__4737__auto___52643 = (0);
while(true){
if((i__4737__auto___52643 < len__4736__auto___52642)){
args__4742__auto__.push((arguments[i__4737__auto___52643]));

var G__52644 = (i__4737__auto___52643 + (1));
i__4737__auto___52643 = G__52644;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return norns_index.app.feature.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(norns_index.app.feature.cljs$core$IFn$_invoke$arity$variadic = (function (feature_name,p__52638){
var vec__52639 = p__52638;
var script_category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52639,(0),null);
var script_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52639,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.norns-feature-container","div.norns-feature-container",-380661651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.img-norns-feature","img.img-norns-feature",1727980931),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),["img/feature/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature_name),".svg"].join('')], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(script_category),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(script_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature_name)].join('')], null));
}));

(norns_index.app.feature.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(norns_index.app.feature.cljs$lang$applyTo = (function (seq52636){
var G__52637 = cljs.core.first(seq52636);
var seq52636__$1 = cljs.core.next(seq52636);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52637,seq52636__$1);
}));


//# sourceMappingURL=norns_index.app.js.map
